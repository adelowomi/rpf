import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Globe,
  MapPin,
  Calendar,
  Play,
  Flame,
  X,
  Phone,
  Mail,
  Clock,
  Car,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/ministries")({
  component: MinistriesPage,
});

function MinistriesPage() {
  const [selectedBranch, setSelectedBranch] = useState<any>(null);

  const branches = [
    {
      id: "london",
      name: "RPF EUROPE",
      location: "London, UK",
      address: "9-11 Cottage Green, London SE5 7ST",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Our flagship location where revival began in 2014. Experience powerful worship, sound doctrine, and life-changing ministry in the heart of London.",
      badge: "FLAGSHIP",
      color: "from-rpf-purple to-rpf-blue",
      services: {
        sunday: "10:00 AM",
        wednesday: "7:00 PM",
        prayer: "Fridays 6:00 PM",
        youth: "Saturdays 4:00 PM",
      },
      contact: {
        phone: "020 335 52829",
        email: "admin@rpfeurope.com",
      },
      pastor: "Pastor Austin E-Ben",
      established: "2014",
      capacity: "500 people",
      parking: "Street parking available",
      transport: "Camberwell Green Station (5 min walk)",
      ministries: [
        "Sunday Service",
        "Prayer Ministry",
        "Bible Study",
        "Youth Ministry",
        "Children's Ministry",
        "Worship Team",
      ],
      specialEvents: [
        "Monthly Revival Services",
        "Quarterly Conferences",
        "Annual Revival Week",
      ],
    },
    {
      id: "africa",
      name: "RPF AFRICA",
      location: "Multiple Locations",
      address: "Various African Cities",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Spreading revival across Africa with passionate worship, strong community, and transformative ministry experiences rooted in love and prayer.",
      color: "from-rpf-red to-rpf-gold",
      services: {
        sunday: "11:00 AM",
        wednesday: "7:00 PM",
        prayer: "Fridays 6:30 PM",
        youth: "Saturdays 5:00 PM",
      },
      contact: {
        phone: "+44 161 234 5678",
        email: "manchester@rpfeurope.org",
      },
      pastor: "Pastor Sarah Johnson",
      established: "2018",
      capacity: "300 people",
      parking: "Free parking available",
      transport: "Manchester Piccadilly (10 min walk)",
      ministries: [
        "Sunday Service",
        "Youth Ministry",
        "Children's Ministry",
        "Bible Study",
        "Prayer Ministry",
        "Community Outreach",
      ],
      specialEvents: [
        "Monthly Prayer Nights",
        "Bi-annual Conferences",
        "Community Service Days",
      ],
    },
    {
      id: "northamerica",
      name: "RPF NORTH AMERICA",
      location: "Multiple Locations",
      address: "Various North American Cities",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Establishing revival across North America with love, prayer, and transformative worship that impacts lives and communities.",
      color: "from-rpf-blue to-rpf-purple",
      services: {
        sunday: "10:30 AM",
        wednesday: "7:00 PM",
        prayer: "Fridays 6:00 PM",
        youth: "Saturdays 4:30 PM",
      },
      contact: {
        phone: "+44 121 345 6789",
        email: "birmingham@rpfeurope.org",
      },
      pastor: "Pastor Michael Brown",
      established: "2019",
      capacity: "250 people",
      parking: "Paid parking nearby",
      transport: "Birmingham New Street (15 min walk)",
      ministries: [
        "Sunday Service",
        "Youth Ministry",
        "Children's Ministry",
        "Bible Study",
        "Prayer Ministry",
        "Seniors Ministry",
      ],
      specialEvents: [
        "Monthly Worship Nights",
        "Quarterly Family Days",
        "Annual Youth Camp",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Branch Details Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={selectedBranch.image}
                alt={selectedBranch.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button
                onClick={() => setSelectedBranch(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              {selectedBranch.badge && (
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white font-semibold">
                      {selectedBranch.badge}
                    </span>
                  </div>
                </div>
              )}
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-4xl font-bold mb-2">
                  {selectedBranch.name}
                </h2>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{selectedBranch.location}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      About This Branch
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {selectedBranch.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">
                          Pastor:
                        </span>
                        <p className="text-gray-600">{selectedBranch.pastor}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">
                          Established:
                        </span>
                        <p className="text-gray-600">
                          {selectedBranch.established}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">
                          Capacity:
                        </span>
                        <p className="text-gray-600">
                          {selectedBranch.capacity}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">
                      Service Times
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Sunday Service</span>
                        </div>
                        <span className="text-gray-600">
                          {selectedBranch.services.sunday}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Bible Study</span>
                        </div>
                        <span className="text-gray-600">
                          {selectedBranch.services.wednesday}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Prayer Meeting</span>
                        </div>
                        <span className="text-gray-600">
                          {selectedBranch.services.prayer}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Youth Ministry</span>
                        </div>
                        <span className="text-gray-600">
                          {selectedBranch.services.youth}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">
                      Ministries Available
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedBranch.ministries.map(
                        (ministry: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {ministry}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">
                      Contact Information
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-600">
                            {selectedBranch.address}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <p className="text-gray-600">
                            {selectedBranch.contact.phone}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-gray-600">
                            {selectedBranch.contact.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">
                      Getting Here
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Car className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Parking</p>
                          <p className="text-gray-600">
                            {selectedBranch.parking}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Public Transport
                          </p>
                          <p className="text-gray-600">
                            {selectedBranch.transport}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">
                      Special Events
                    </h4>
                    <ul className="space-y-2">
                      {selectedBranch.specialEvents.map(
                        (event: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-600">{event}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-rpf-gradient-primary hover:opacity-90 text-rpf-white rounded-full rpf-body font-semibold py-3 shadow-lg">
                      Plan Your Visit
                      <ArrowRight className="ml-2 h-5 w-5" />
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
              OUR MINISTRIES
            </h1>
            <p className="rpf-subtitle text-xl md:text-2xl mb-4 text-rpf-white/90">
              A city beyond walls: Jerusalem shall be inhabited as towns without
              walls
            </p>
            <p className="rpf-tagline text-lg mb-8 text-rpf-gold">
              IT'S TIME TO SEEK THE LORD
            </p>
            <Button className="bg-rpf-gold text-rpf-black hover:bg-rpf-gold/90 px-8 py-4 rounded-full rpf-body font-bold text-lg shadow-lg">
              Get Involved Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Branches Section - Redesigned for Ministries */}
      <section className="py-20 bg-gradient-to-br from-rpf-ivory to-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                VISIT OUR LOCATIONS
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-3xl mx-auto">
                Experience revival and transformation at any of our branches
                across the globe, or join our online community from anywhere in
                the world
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Branch Cards */}
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {branch.badge && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-white text-sm font-semibold">
                            {branch.badge}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{branch.name}</h3>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span className="text-sm">{branch.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {branch.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-2 flex-shrink-0" />
                        <span>
                          Sundays {branch.services.sunday} • Wednesdays{" "}
                          {branch.services.wednesday}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full bg-rpf-gradient-primary hover:opacity-90 text-rpf-white rounded-full rpf-body font-semibold text-sm py-2 shadow-lg">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}

              {/* RPF on Campus */}
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="RPF on Campus"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-semibold">
                        STUDENTS
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="rpf-title text-xl mb-1">RPF ON CAMPUS</h3>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span className="rpf-body text-sm">
                        Multiple Universities
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="rpf-body text-rpf-black/70 mb-4 text-sm leading-relaxed">
                    Connecting students across universities with revival, sound
                    doctrine, and transformative community rooted in love for
                    Christ.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-xs text-rpf-black/60">
                      <Users className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span className="rpf-body">
                        Multiple University Locations
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-rpf-black/60">
                      <Calendar className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span className="rpf-body">
                        Weekly Meetings • Revival Events
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-rpf-gradient-primary hover:opacity-90 text-rpf-white rounded-full rpf-body font-semibold text-sm py-2 shadow-lg">
                    Join Fellowship
                  </Button>
                </div>
              </div>

              {/* Online Branch */}
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Online Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-semibold">
                        GLOBAL
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">RPF ONLINE</h3>
                    <div className="flex items-center space-x-1">
                      <Play className="h-3 w-3" />
                      <span className="text-sm">Worldwide Access</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Join our global community from anywhere in the world through
                    live streaming and interactive online ministry.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-xs text-gray-500">
                      <Play className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span>Live Streaming Available</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Globe className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span>Multiple Time Zones Supported</span>
                    </div>
                  </div>
                  <Button className="w-full bg-rpf-gradient-fire hover:opacity-90 text-rpf-white rounded-full rpf-body font-semibold text-sm py-2 shadow-lg">
                    Watch Online
                  </Button>
                </div>
              </div>

              {/* Expanding Soon */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200">
                <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Flame className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-700 mb-1">
                      REVIVAL SPREADING
                    </h4>
                    <p className="text-gray-500 text-sm">
                      New Locations Coming
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    We're expanding across Europe! New branches opening soon to
                    serve more communities with God's love and revival.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span>Multiple European Cities Planned</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Flame className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span>Revival Movement Growing</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 rounded-full font-semibold text-sm py-2"
                  >
                    Stay Updated
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="text-center bg-rpf-gradient-primary rounded-3xl p-12 text-rpf-white">
              <h3 className="rpf-title text-3xl md:text-4xl mb-4">
                CAN'T FIND A LOCATION NEAR YOU?
              </h3>
              <p className="rpf-body text-lg text-rpf-white/90 mb-4 max-w-2xl mx-auto">
                Join our online community or help us bring revival to your city.
              </p>
              <p className="rpf-tagline text-rpf-gold mb-8">
                IT'S TIME TO SEEK THE LORD
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-rpf-gold text-rpf-black hover:bg-rpf-gold/90 px-8 py-4 rounded-full rpf-body font-bold shadow-lg">
                  Start a Branch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-rpf-white text-rpf-white hover:bg-rpf-white hover:text-rpf-purple px-8 py-4 rounded-full rpf-body font-bold"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Online Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="rpf-title text-4xl md:text-5xl mb-6 text-rpf-black">
              READY TO GET INVOLVED?
            </h2>
            <p className="rpf-body text-xl text-rpf-black/70 mb-4">
              Take the next step in your faith journey and experience
              transformation through love, sound doctrine, and spiritual
              discipline
            </p>
            <p className="rpf-tagline text-rpf-gold mb-8">
              IT'S TIME TO SEEK THE LORD
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-rpf-gradient-primary hover:opacity-90 text-rpf-white px-8 py-4 rounded-full rpf-body font-bold shadow-lg">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-rpf-purple text-rpf-purple hover:bg-rpf-purple hover:text-rpf-white px-8 py-4 rounded-full rpf-body font-bold"
              >
                Visit This Sunday
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
