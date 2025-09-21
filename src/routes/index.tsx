import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Play,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Heart,
  Star,
  ChevronDown,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Church,
  Flame,
  X,
  Clock,
  Car,
} from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);

  const branches = [
    {
      id: "london",
      name: "RPF LONDON",
      location: "London, UK",
      address: "9-11 Cottage Green, London SE5 7ST",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Our flagship location where it all began in 2014. Experience powerful worship and life-changing ministry in the heart of London.",
      badge: "FLAGSHIP",
      color: "from-blue-600 to-blue-700",
      services: {
        sunday: "10:00 AM",
        wednesday: "7:00 PM",
        prayer: "Fridays 6:00 PM",
        youth: "Saturdays 4:00 PM",
      },
      contact: {
        phone: "+44 20 7123 4567",
        email: "london@rpfeurope.org",
      },
      pastor: "Pastor John Smith",
      established: "2014",
      capacity: "500 people",
      parking: "Street parking available",
      transport: "Camberwell Green Station (5 min walk)",
      ministries: [
        "Sunday Service",
        "Youth Ministry",
        "Children's Ministry",
        "Bible Study",
        "Prayer Ministry",
        "Worship Team",
      ],
      specialEvents: [
        "Monthly Healing Services",
        "Quarterly Conferences",
        "Annual Revival Week",
      ],
    },
    {
      id: "manchester",
      name: "RPF MANCHESTER",
      location: "Manchester, UK",
      address: "Central Manchester Location",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Bringing revival to the North with passionate worship, strong community, and transformative ministry experiences.",
      color: "from-green-600 to-green-700",
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
      id: "birmingham",
      name: "RPF BIRMINGHAM",
      location: "Birmingham, UK",
      address: "Central Birmingham Location",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Serving the Midlands with love, prayer, and transformative worship that impacts lives and communities.",
      color: "from-purple-600 to-purple-700",
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

  const heroSlides = [
    {
      title: "FIND YOUR PURPOSE",
      subtitle: "Discover what God has planned for your life",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Start Your Journey",
    },
    {
      title: "GROW IN COMMUNITY",
      subtitle: "Connect with others who share your faith",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Join A Group",
    },
    {
      title: "MAKE A DIFFERENCE",
      subtitle: "Use your gifts to serve others and change lives",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Get Involved",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                    <Button
                      className={`w-full bg-gradient-to-r ${selectedBranch.color} hover:opacity-90 text-white rounded-full font-semibold py-3`}
                    >
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
      {/* Hero Section - Elevation Church Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light max-w-3xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Online
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Service Times Section - Elevation Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                JOIN US THIS WEEKEND
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience life-changing worship and biblical teaching that will
                inspire your week
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sunday Service */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    SUNDAY SERVICE
                  </h3>
                  <p className="text-gray-600 mb-4">Main Worship Experience</p>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">10:00 AM</p>
                    <p className="text-sm text-gray-500">In-Person & Online</p>
                  </div>
                  <Button className="mt-6 w-full bg-black hover:bg-gray-800 text-white rounded-full">
                    Plan Your Visit
                  </Button>
                </div>
              </div>

              {/* Midweek Service */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    MIDWEEK
                  </h3>
                  <p className="text-gray-600 mb-4">Prayer & Bible Study</p>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">7:00 PM</p>
                    <p className="text-sm text-gray-500">Wednesday</p>
                  </div>
                  <Button className="mt-6 w-full bg-black hover:bg-gray-800 text-white rounded-full">
                    Join Online
                  </Button>
                </div>
              </div>

              {/* Youth Service */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    YOUTH
                  </h3>
                  <p className="text-gray-600 mb-4">Ages 13-18</p>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">6:00 PM</p>
                    <p className="text-sm text-gray-500">Friday</p>
                  </div>
                  <Button className="mt-6 w-full bg-black hover:bg-gray-800 text-white rounded-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean Elevation Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
                  ABOUT RPF EUROPE
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Welcome to Redeemed Pillar of Fire Europe - a vibrant
                    community of believers dedicated to revival, prayer, and
                    spreading God's love across Europe and beyond.
                  </p>
                  <p>
                    Founded in October 2014 by Pastor Augustine E-Ben, our
                    ministry has expanded greatly with several branches and
                    university fellowships worldwide. We are built on love and
                    prayer, steadfastly dedicating ourselves to looking more
                    like Christ daily.
                  </p>
                  <p>
                    Our goal is to bring souls from darkness to light, that they
                    may receive forgiveness of sins and the inheritance promised
                    to those who are sanctified by faith in Jesus Christ.
                  </p>
                </div>
                <Button className="mt-8 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Church Community"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">
                      Years of Ministry
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 bg-black text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-black">Multiple</div>
                    <div className="text-sm opacity-80">Branches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Section - Elevation Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                MEET OUR PASTOR
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leading with passion, purpose, and unwavering faith
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Pastor Austin E-Ben"
                    className="w-80 h-80 rounded-full object-cover mx-auto lg:mx-0 shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-black text-white p-4 rounded-full">
                    <Church className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                  PASTOR AUSTIN E-BEN
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Head Pastor & Founder
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Pastor Augustine E-Ben founded Redeemed Pillar of Fire
                    Europe in October 2014. His love for God is reflected in his
                    teaching of the word, love for souls, and dedication to the
                    work of God.
                  </p>
                  <p>
                    With the help of God, RPF Ministry aims to bring revival
                    that will sweep the nations and restore the fear of the
                    Lord. The ministry was built on love and prayer, as we all
                    aim to look a little bit more like Christ daily.
                  </p>
                </div>
                <Button className="mt-8 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold">
                  Read Pastor's Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section - Vous Church Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                OUR BRANCHES
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find a RPF Europe location near you and join our growing
                community across Europe
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Branch Cards */}
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {branch.location.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {branch.description.length > 80
                        ? `${branch.description.substring(0, 80)}...`
                        : branch.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Sundays {branch.services.sunday}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-semibold">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}

              {/* University Fellowship */}
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="University Fellowship"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">UNIVERSITY</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    UNIVERSITY FELLOWSHIP
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Connecting students across multiple universities with faith
                    and community.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Multiple Campus Locations</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Weekly Meetings</span>
                    </div>
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-semibold">
                    Join Fellowship
                  </Button>
                </div>
              </div>

              {/* Online Branch */}
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Online Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Play className="h-4 w-4" />
                      <span className="text-sm font-medium">ONLINE</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    RPF ONLINE
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Join us from anywhere in the world through our live
                    streaming services.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Play className="h-4 w-4 mr-2" />
                      <span>Live Streaming Available</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Multiple Time Zones</span>
                    </div>
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-semibold">
                    Watch Online
                  </Button>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-64 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Flame className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-700">
                      MORE LOCATIONS
                    </h4>
                    <p className="text-gray-500 mt-2">Coming Soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    EXPANDING SOON
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We're growing! New branches opening across Europe to serve
                    more communities.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Multiple Cities Planned</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Flame className="h-4 w-4 mr-2" />
                      <span>Revival Spreading</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-black text-black hover:bg-black hover:text-white rounded-full font-semibold"
                  >
                    Stay Updated
                  </Button>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                CAN'T FIND A LOCATION NEAR YOU?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our online community or help us bring RPF Europe to your
                city. Revival starts with one person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold">
                  Start a Branch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-bold"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                GET CONNECTED
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find your place in our community and grow in your faith journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Community Groups"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-black" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  COMMUNITY GROUPS
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect with others in small group settings for deeper
                  relationships and spiritual growth.
                </p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white rounded-full"
                >
                  Find A Group
                </Button>
              </div>

              <div className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Youth Ministry"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-8 w-8 text-black" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  YOUTH MINISTRY
                </h3>
                <p className="text-gray-600 mb-6">
                  Empowering the next generation through engaging programs and
                  mentorship opportunities.
                </p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white rounded-full"
                >
                  Join Youth
                </Button>
              </div>

              <div className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Outreach"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-8 w-8 text-black" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  OUTREACH
                </h3>
                <p className="text-gray-600 mb-6">
                  Make a difference in our community through service projects
                  and mission opportunities.
                </p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white rounded-full"
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Elevation Style */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">VISIT US</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We'd love to meet you. Join us for worship and experience our
                community firsthand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">ADDRESS</h3>
                <div className="text-gray-300 space-y-1">
                  <p>9-11 Cottage Green</p>
                  <p>London SE5 7ST</p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">PHONE</h3>
                <p className="text-gray-300">020 335 52829</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">EMAIL</h3>
                <p className="text-gray-300">admin@rpfeurope.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">SUNDAY</h3>
                <p className="text-gray-300">10:00 AM</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8">FOLLOW US</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.instagram.com/rpfeurope/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/RPF.UK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/rpfchurchuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Plan Your Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
