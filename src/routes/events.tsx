import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  ExternalLink,
  Phone,
  Mail,
} from "lucide-react";
import { useState, useMemo } from "react";
import {
  eventsData,
  eventCategories,
  getEventsByMonth,
  getUpcomingEvents,
  type Event,
} from "@/data/events-data";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Get events for current month
  const monthEvents = useMemo(() => {
    return getEventsByMonth(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  // Get upcoming events
  const upcomingEvents = useMemo(() => {
    return getUpcomingEvents(6);
  }, []);

  // Filter events by category
  const filteredEvents = useMemo(() => {
    if (!selectedCategory) return eventsData;
    return eventsData.filter((event) => event.category === selectedCategory);
  }, [selectedCategory]);

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return monthEvents.filter((event) => event.date === dateStr);
  };

  const formatEventTime = (time: string, endTime?: string) => {
    const formatTime = (t: string) => {
      const [hours, minutes] = t.split(":");
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? "PM" : "AM";
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return `${displayHour}:${minutes} ${ampm}`;
    };

    if (endTime && !endTime.includes("T")) {
      return `${formatTime(time)} - ${formatTime(endTime)}`;
    }
    return formatTime(time);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 bg-gray-50"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDay(day);
      const isToday =
        new Date().toDateString() ===
        new Date(currentYear, currentMonth, day).toDateString();

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 p-1 cursor-pointer hover:bg-gray-50 transition-colors ${
            isToday ? "bg-blue-50 border-blue-300" : "bg-white"
          }`}
          onClick={() => {
            if (dayEvents.length === 1) {
              window.location.href = `/events/${dayEvents[0].id}`;
            }
          }}
        >
          <div
            className={`text-sm font-medium mb-1 ${isToday ? "text-blue-600" : "text-gray-900"}`}
          >
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`text-xs p-1 rounded truncate cursor-pointer hover:opacity-80 bg-gradient-to-r ${eventCategories[event.category].color} text-white`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = `/events/${event.id}`;
                }}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 font-medium">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute top-4 left-4">
                <div
                  className={`bg-gradient-to-r ${eventCategories[selectedEvent.category].color} rounded-full px-4 py-2`}
                >
                  <span className="text-white font-semibold text-sm">
                    {eventCategories[selectedEvent.category].icon}{" "}
                    {eventCategories[selectedEvent.category].name}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedEvent.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(selectedEvent.date).toLocaleDateString(
                        "en-GB",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {formatEventTime(
                        selectedEvent.time,
                        selectedEvent.endTime
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    About This Event
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">
                          {selectedEvent.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Organizer</p>
                        <p className="text-gray-600">
                          {selectedEvent.organizer}
                        </p>
                      </div>
                    </div>

                    {selectedEvent.capacity && (
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Capacity</p>
                          <p className="text-gray-600">
                            {selectedEvent.capacity} people
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedEvent.price && (
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 text-gray-500 mt-0.5 text-center">
                          £
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Price</p>
                          <p className="text-gray-600">{selectedEvent.price}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    {selectedEvent.contact && (
                      <>
                        <h4 className="font-bold text-gray-900">
                          Contact Information
                        </h4>
                        {selectedEvent.contact.email && (
                          <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-gray-500" />
                            <a
                              href={`mailto:${selectedEvent.contact.email}`}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              {selectedEvent.contact.email}
                            </a>
                          </div>
                        )}
                        {selectedEvent.contact.phone && (
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-gray-500" />
                            <a
                              href={`tel:${selectedEvent.contact.phone}`}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              {selectedEvent.contact.phone}
                            </a>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedEvent.registrationRequired ? (
                      <Button className="flex-1 bg-rpf-gradient-primary hover:opacity-90 text-rpf-white rounded-full font-semibold py-3 shadow-lg">
                        Register Now
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    ) : (
                      <Button className="flex-1 bg-rpf-gradient-primary hover:opacity-90 text-rpf-white rounded-full font-semibold py-3 shadow-lg">
                        Add to Calendar
                        <Calendar className="ml-2 h-5 w-5" />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full font-semibold py-3"
                    >
                      Share Event
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 bg-rpf-gradient-primary text-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="rpf-title text-5xl md:text-6xl mb-6">
              UPCOMING EVENTS
            </h1>
            <p className="rpf-subtitle text-xl md:text-2xl mb-4 text-rpf-white/90">
              Join us for powerful worship, sound doctrine, and transformative
              experiences
            </p>
            <p className="rpf-tagline text-lg mb-8 text-rpf-gold">
              IT'S TIME TO SEEK THE LORD
            </p>
          </div>
        </div>
      </section>

      {/* Navigation and Filters */}
      <section className="py-8 bg-rpf-ivory border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* View Toggle */}
              <div className="flex bg-white rounded-full p-1 shadow-md">
                <button
                  onClick={() => setViewMode("calendar")}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    viewMode === "calendar"
                      ? "bg-rpf-purple text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Calendar View
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    viewMode === "list"
                      ? "bg-rpf-purple text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Filter className="h-4 w-4 inline mr-2" />
                  List View
                </button>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !selectedCategory
                      ? "bg-rpf-purple text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  All Events
                </button>
                {Object.entries(eventCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {viewMode === "calendar" ? (
        /* Calendar View */
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="rpf-title text-3xl text-rpf-black">
                  {currentDate.toLocaleDateString("en-GB", {
                    month: "long",
                    year: "numeric",
                  })}
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => navigateMonth("prev")}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentDate(new Date())}
                    className="px-4 py-2 bg-rpf-purple text-white rounded-full text-sm font-medium hover:opacity-90"
                  >
                    Today
                  </button>
                  <button
                    onClick={() => navigateMonth("next")}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Days of week header */}
                <div className="grid grid-cols-7 bg-gray-50">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="p-4 text-center font-medium text-gray-600 border-b"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7">{renderCalendar()}</div>
              </div>

              {/* Upcoming Events Sidebar */}
              <div className="mt-12">
                <h3 className="rpf-title text-2xl mb-6 text-rpf-black">
                  Upcoming Events
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={() =>
                        (window.location.href = `/events/${event.id}`)
                      }
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden"
                    >
                      <div className="relative h-48">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div
                            className={`bg-gradient-to-r ${eventCategories[event.category].color} rounded-full px-3 py-1`}
                          >
                            <span className="text-white font-semibold text-xs">
                              {eventCategories[event.category].icon}{" "}
                              {eventCategories[event.category].name}
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            {event.title}
                          </h4>
                          <div className="flex items-center space-x-3 text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(event.date).toLocaleDateString(
                                  "en-GB"
                                )}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{formatEventTime(event.time)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* List View */
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="rpf-title text-3xl mb-8 text-rpf-black">
                {selectedCategory
                  ? eventCategories[
                      selectedCategory as keyof typeof eventCategories
                    ].name
                  : "All Events"}
              </h2>

              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={() =>
                      (window.location.href = `/events/${event.id}`)
                    }
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.01] overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div
                              className={`inline-block bg-gradient-to-r ${eventCategories[event.category].color} rounded-full px-4 py-2 mb-3`}
                            >
                              <span className="text-white font-semibold text-sm">
                                {eventCategories[event.category].icon}{" "}
                                {eventCategories[event.category].name}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {event.title}
                            </h3>
                          </div>
                          {event.featured && (
                            <div className="bg-rpf-gold text-rpf-black px-3 py-1 rounded-full text-sm font-bold">
                              Featured
                            </div>
                          )}
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(event.date).toLocaleDateString(
                                "en-GB",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>
                              {formatEventTime(event.time, event.endTime)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>{event.organizer}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {event.registrationRequired && (
                              <span className="text-sm text-rpf-red font-medium">
                                Registration Required
                              </span>
                            )}
                            {event.price && (
                              <span className="text-sm text-gray-600">
                                {event.price}
                              </span>
                            )}
                          </div>
                          <Button className="bg-rpf-gradient-primary hover:opacity-90 text-rpf-white rounded-full font-semibold px-6 py-2 shadow-lg">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-rpf-gradient-primary text-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="rpf-title text-4xl md:text-5xl mb-6">
              DON'T MISS OUT
            </h2>
            <p className="rpf-body text-xl mb-4 text-rpf-white/90">
              Stay connected with all our upcoming events and be part of the
              revival movement
            </p>
            <p className="rpf-tagline text-rpf-gold mb-8">
              IT'S TIME TO SEEK THE LORD
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-rpf-gold text-rpf-black hover:bg-rpf-gold/90 px-8 py-4 rounded-full rpf-body font-bold shadow-lg">
                Subscribe to Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-rpf-white text-rpf-white hover:bg-rpf-white hover:text-rpf-purple px-8 py-4 rounded-full rpf-body font-bold"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
