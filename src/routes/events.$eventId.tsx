import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowLeft,
  ExternalLink,
  Phone,
  Mail,
  Share2,
  Download,
  Heart,
} from "lucide-react";
import { eventsData, eventCategories } from "@/data/events-data";
import { useState } from "react";

export const Route = createFileRoute("/events/$eventId")({
  component: EventDetailPage,
  loader: ({ params }) => {
    const event = eventsData.find((e) => e.id === params.eventId);
    if (!event) {
      throw new Error("Event not found");
    }
    return { event };
  },
});

function EventDetailPage() {
  const { event } = Route.useLoaderData();
  const [isRegistered, setIsRegistered] = useState(false);

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

  const formatEventDate = (dateStr: string, endTime?: string) => {
    const startDate = new Date(dateStr);

    if (endTime && endTime.includes("T")) {
      const endDate = new Date(endTime);
      if (startDate.toDateString() !== endDate.toDateString()) {
        return `${startDate.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })} - ${endDate.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`;
      }
    }

    return startDate.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isEventPast = () => {
    const eventDate = new Date(event.date);
    return eventDate < new Date();
  };

  const getRelatedEvents = () => {
    return eventsData
      .filter((e) => e.id !== event.id && e.category === event.category)
      .slice(0, 3);
  };

  const relatedEvents = getRelatedEvents();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <Button
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Button>
        </div>

        {/* Event Category Badge */}
        <div className="absolute top-8 right-8 z-10">
          <div
            className={`bg-gradient-to-r ${eventCategories[event.category as keyof typeof eventCategories].color} rounded-full px-6 py-3 shadow-lg`}
          >
            <span className="text-white font-bold">
              {
                eventCategories[event.category as keyof typeof eventCategories]
                  .icon
              }{" "}
              {
                eventCategories[event.category as keyof typeof eventCategories]
                  .name
              }
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto max-w-4xl">
            <h1 className="rpf-title text-4xl md:text-6xl mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-lg mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{formatEventDate(event.date, event.endTime)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{formatEventTime(event.time, event.endTime)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{event.location}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              {!isEventPast() && (
                <>
                  {event.registrationRequired ? (
                    <Button
                      className="bg-rpf-gold text-rpf-black hover:bg-rpf-gold/90 px-8 py-3 rounded-full font-bold shadow-lg"
                      onClick={() => setIsRegistered(!isRegistered)}
                    >
                      {isRegistered ? (
                        <>
                          <Heart className="h-5 w-5 mr-2 fill-current" />
                          Registered
                        </>
                      ) : (
                        <>
                          Register Now
                          <ExternalLink className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button className="bg-rpf-gold text-rpf-black hover:bg-rpf-gold/90 px-8 py-3 rounded-full font-bold shadow-lg">
                      Add to Calendar
                      <Calendar className="h-5 w-5 ml-2" />
                    </Button>
                  )}
                </>
              )}
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="rpf-title text-3xl mb-6 text-rpf-black">
                  About This Event
                </h2>
                <div className="rpf-body text-lg text-rpf-black/80 leading-relaxed space-y-4">
                  <p>{event.description}</p>

                  {/* Additional event details based on category */}
                  {event.category === "powersource" && (
                    <div className="bg-rpf-purple/5 p-6 rounded-2xl border-l-4 border-rpf-purple">
                      <h3 className="font-bold text-rpf-purple mb-2">
                        What to Expect
                      </h3>
                      <ul className="space-y-2 text-rpf-black/70">
                        <li>• Powerful worship and praise</li>
                        <li>• Sound biblical teaching</li>
                        <li>• Prayer and ministry time</li>
                        <li>• Opportunity for spiritual breakthrough</li>
                      </ul>
                    </div>
                  )}

                  {event.category === "retreat" && (
                    <div className="bg-rpf-blue/5 p-6 rounded-2xl border-l-4 border-rpf-blue">
                      <h3 className="font-bold text-rpf-blue mb-2">
                        What's Included
                      </h3>
                      <ul className="space-y-2 text-rpf-black/70">
                        <li>• Accommodation for the weekend</li>
                        <li>• All meals provided</li>
                        <li>• Worship sessions and teaching</li>
                        <li>• Small group fellowship time</li>
                        <li>• Recreational activities</li>
                      </ul>
                    </div>
                  )}

                  {event.category === "campus" && (
                    <div className="bg-rpf-red/5 p-6 rounded-2xl border-l-4 border-rpf-red">
                      <h3 className="font-bold text-rpf-red mb-2">
                        Join the Mission
                      </h3>
                      <ul className="space-y-2 text-rpf-black/70">
                        <li>• Evangelism training provided</li>
                        <li>• Visit multiple university campuses</li>
                        <li>• Share the gospel with students</li>
                        <li>• Fellowship with other believers</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Event Schedule (for multi-day events) */}
              {event.endTime && event.endTime.includes("T") && (
                <div>
                  <h3 className="rpf-title text-2xl mb-6 text-rpf-black">
                    Event Schedule
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">
                          Day 1 -{" "}
                          {new Date(event.date).toLocaleDateString("en-GB", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </h4>
                        <span className="text-sm text-gray-600">
                          {formatEventTime(event.time)}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Opening session, worship, and welcome
                      </p>
                    </div>

                    {event.category === "retreat" && (
                      <>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-900">
                              Day 2 - Saturday
                            </h4>
                            <span className="text-sm text-gray-600">
                              Full Day
                            </span>
                          </div>
                          <p className="text-gray-600">
                            Teaching sessions, prayer time, and fellowship
                          </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-900">
                              Day 3 - Sunday
                            </h4>
                            <span className="text-sm text-gray-600">
                              Until 3:00 PM
                            </span>
                          </div>
                          <p className="text-gray-600">
                            Final worship service and departure
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Event Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border">
                <h3 className="font-bold text-xl mb-6 text-gray-900">
                  Event Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Date & Time</p>
                      <p className="text-gray-600">
                        {formatEventDate(event.date, event.endTime)}
                      </p>
                      <p className="text-gray-600">
                        {formatEventTime(event.time, event.endTime)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Organizer</p>
                      <p className="text-gray-600">{event.organizer}</p>
                    </div>
                  </div>

                  {event.capacity && (
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Capacity</p>
                        <p className="text-gray-600">{event.capacity} people</p>
                      </div>
                    </div>
                  )}

                  {event.price && (
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 text-gray-500 mt-1 text-center">
                        £
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Price</p>
                        <p className="text-gray-600">{event.price}</p>
                      </div>
                    </div>
                  )}

                  {event.registrationRequired && (
                    <div className="bg-rpf-red/10 p-4 rounded-lg border border-rpf-red/20">
                      <p className="text-rpf-red font-medium text-sm">
                        ⚠️ Registration Required
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              {event.contact && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border">
                  <h3 className="font-bold text-xl mb-6 text-gray-900">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    {event.contact.email && (
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-500" />
                        <a
                          href={`mailto:${event.contact.email}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {event.contact.email}
                        </a>
                      </div>
                    )}

                    {event.contact.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-500" />
                        <a
                          href={`tel:${event.contact.phone}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {event.contact.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Download Calendar */}
              <div className="bg-rpf-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl mb-4">Add to Your Calendar</h3>
                <p className="text-rpf-white/90 mb-6 text-sm">
                  Don't miss this event! Add it to your calendar and get
                  reminders.
                </p>
                <Button className="w-full bg-white text-rpf-purple hover:bg-gray-100 rounded-full font-bold">
                  <Download className="h-4 w-4 mr-2" />
                  Download .ics File
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-16 bg-rpf-ivory">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="rpf-title text-3xl mb-8 text-rpf-black">
              More{" "}
              {
                eventCategories[event.category as keyof typeof eventCategories]
                  .name
              }
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedEvents.map((relatedEvent) => (
                <div
                  key={relatedEvent.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden"
                  onClick={() =>
                    (window.location.href = `/events/${relatedEvent.id}`)
                  }
                >
                  <div className="relative h-48">
                    <img
                      src={relatedEvent.image}
                      alt={relatedEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-bold text-lg mb-1">
                        {relatedEvent.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(relatedEvent.date).toLocaleDateString(
                              "en-GB"
                            )}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{formatEventTime(relatedEvent.time)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {relatedEvent.description.substring(0, 120)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
