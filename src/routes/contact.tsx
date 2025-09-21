import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Download,
  BookOpen,
  Headphones,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const branches = [
    {
      name: "RPF Europe",
      address: "9-11 Cottage Green, London SE5 7ST",
      phone: "020 335 52829",
      email: "admin@rpfeurope.com",
      serviceTime: "Sundays 10:00 AM",
    },
    {
      name: "RPF Africa",
      address: "Multiple African Locations",
      phone: "Contact via Email",
      email: "africa@rpfglobal.org",
      serviceTime: "Various Times",
    },
    {
      name: "RPF North America",
      address: "Multiple North American Locations",
      phone: "Contact via Email",
      email: "northamerica@rpfglobal.org",
      serviceTime: "Various Times",
    },
  ];

  const resources = [
    {
      title: "Sermon Library",
      description:
        "Access hundreds of inspiring messages from Pastor Austin E-Ben and guest speakers.",
      icon: Headphones,
      type: "Audio & Video",
    },
    {
      title: "Bible Study Guides",
      description:
        "Downloadable study materials to help you grow deeper in your faith.",
      icon: BookOpen,
      type: "PDF Downloads",
    },
    {
      title: "Worship Music",
      description:
        "Listen to our latest worship songs and albums from RPF Europe.",
      icon: Video,
      type: "Streaming",
    },
    {
      title: "Prayer Resources",
      description:
        "Guides and materials to strengthen your prayer life and spiritual discipline.",
      icon: Download,
      type: "Digital Resources",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-rpf-gradient-primary text-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="rpf-title text-5xl md:text-6xl mb-6">
              CONTACT & RESOURCES
            </h1>
            <p className="rpf-body text-xl md:text-2xl mb-4 text-rpf-white/90">
              Get in touch with us and access helpful resources for your
              spiritual growth
            </p>
            <p className="rpf-tagline text-rpf-gold text-lg">
              IT'S TIME TO SEEK THE LORD
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                GET IN TOUCH
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                We'd love to connect with you. Reach out to any of our global
                locations or join our online community.
              </p>
            </div>

            {/* Branch Locations */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {branches.map((branch, index) => (
                <div
                  key={index}
                  className="bg-rpf-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-rpf-muted-grey/20"
                >
                  <h3 className="rpf-title text-2xl mb-6 text-rpf-black">
                    {branch.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-rpf-purple mt-1 flex-shrink-0" />
                      <span className="rpf-body text-rpf-black/70">
                        {branch.address}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-rpf-purple flex-shrink-0" />
                      <span className="rpf-body text-rpf-black/70">
                        {branch.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-rpf-purple flex-shrink-0" />
                      <span className="rpf-body text-rpf-black/70">
                        {branch.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-rpf-purple flex-shrink-0" />
                      <span className="rpf-body text-rpf-black/70">
                        {branch.serviceTime}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-rpf-gradient-primary hover:opacity-90 text-rpf-white rounded-full rpf-body font-semibold shadow-md">
                    Visit This Branch
                  </Button>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-12">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-full font-bold text-lg">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              FOLLOW US ONLINE
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Stay connected with our community and get the latest updates
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Facebook className="h-8 w-8 text-white" />
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
              >
                <Instagram className="h-8 w-8 text-white" />
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
              >
                <Twitter className="h-8 w-8 text-white" />
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
              >
                <Youtube className="h-8 w-8 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                HELPFUL RESOURCES
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access sermons, study materials, and other resources to support
                your spiritual growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="text-xs text-gray-500 mb-6 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {resource.type}
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-semibold">
                    Access Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-rpf-gradient-fire rounded-3xl p-12 text-rpf-white text-center">
              <h2 className="rpf-title text-4xl mb-6">
                NEED PRAYER OR SUPPORT?
              </h2>
              <p className="rpf-body text-xl mb-4 text-rpf-white/90">
                If you're going through a difficult time or need someone to pray
                with you, our ministry is built on love and prayer.
              </p>
              <p className="rpf-tagline text-rpf-white mb-8">
                IT'S TIME TO SEEK THE LORD
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-rpf-white text-rpf-red hover:bg-rpf-white/90 px-8 py-4 rounded-full rpf-body font-bold shadow-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Prayer Line
                </Button>
                <Button
                  variant="outline"
                  className="border-rpf-white text-rpf-white hover:bg-rpf-white hover:text-rpf-red px-8 py-4 rounded-full rpf-body font-bold"
                >
                  Submit Prayer Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
