import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Droplets,
  Heart,
  Calendar,
  MessageCircle,
  Star,
  UserPlus,
  Building,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/next-steps")({
  component: NextStepsPage,
});

function NextStepsPage() {
  const nextStepsSections = [
    {
      title: "Baptism Information",
      description:
        "Take the next step in your faith journey through baptism. Learn about the significance of baptism and how to prepare for this sacred commitment.",
      icon: Droplets,
      action: "Learn About Baptism",
      color: "bg-rpf-blue",
    },
    {
      title: "Support & Counselling Services",
      description:
        "Access professional counselling and spiritual support services. We're here to walk alongside you through life's challenges.",
      icon: Heart,
      action: "Get Support",
      color: "bg-rpf-purple",
    },
    {
      title: "Prayer Requests",
      description:
        "Submit your prayer requests and let our community lift you up in prayer. Experience the power of collective intercession.",
      icon: MessageCircle,
      action: "Submit Prayer Request",
      color: "bg-rpf-red",
    },
    {
      title: "Submit Testimonies",
      description:
        "Share your testimony of God's goodness and read inspiring stories from our community members.",
      icon: Star,
      action: "Share Your Story",
      color: "bg-rpf-gold",
    },
    {
      title: "Join a Mentorship Group",
      description:
        "Connect with experienced believers for guidance and spiritual growth.",
      icon: UserPlus,
      action: "Find a Mentor",
      color: "bg-rpf-blue",
      verse:
        "Iron sharpens iron, and one man sharpens another. - Proverbs 27:17",
    },
    {
      title: "Join a Department",
      description:
        "Use your gifts and talents to serve in one of our ministry departments.",
      icon: Building,
      action: "Explore Departments",
      color: "bg-rpf-purple",
      verse:
        "As each has received a gift, use it to serve one another, as good stewards of God's varied grace. - 1 Peter 4:10",
    },
    {
      title: "Come to a Service",
      description:
        "Visit one of our branch locations and experience transformative worship and sound biblical teaching.",
      icon: Calendar,
      action: "Find a Branch",
      color: "bg-rpf-red",
    },
  ];

  const testimonies = [
    {
      name: "Sarah M.",
      testimony:
        "Through Revival People's Fellowship, I found not just a church, but a family. The mentorship program connected me with amazing spiritual mothers who guided my growth.",
      location: "Lagos Branch",
    },
    {
      name: "David O.",
      testimony:
        "The baptism experience at RPF was life-changing. The preparation classes helped me understand the depth of this commitment to Christ.",
      location: "Abuja Branch",
    },
    {
      name: "Grace A.",
      testimony:
        "Joining the worship department allowed me to use my musical gifts for God's glory. The training and spiritual development have been incredible.",
      location: "Port Harcourt Branch",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-rpf-gradient-primary text-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="rpf-title text-5xl md:text-6xl mb-6">
              YOUR NEXT STEPS
            </h1>
            <p className="rpf-body text-xl md:text-2xl mb-4 text-rpf-white/90">
              Whether you're new to faith or seeking deeper transformation,
              we're here to guide your spiritual journey
            </p>
            <p className="rpf-tagline text-rpf-gold text-lg mb-8">
              IT'S TIME TO SEEK THE LORD
            </p>
            <Button className="bg-rpf-gold text-rpf-black hover:bg-rpf-gold/90 px-8 py-4 rounded-full rpf-body font-bold text-lg shadow-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Next Steps Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                YOUR NEXT STEPS
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                Take meaningful steps in your spiritual journey with these
                opportunities for growth, connection, and service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nextStepsSections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                >
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 ${section.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="rpf-title text-2xl mb-4 text-rpf-black text-center">
                    {section.title}
                  </h3>
                  <p className="rpf-body text-rpf-black/70 mb-6 leading-relaxed text-center">
                    {section.description}
                  </p>
                  {section.verse && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-sm italic text-rpf-black/80 text-center">
                        "{section.verse}"
                      </p>
                    </div>
                  )}
                  <Button className="w-full bg-rpf-gradient-primary hover:opacity-90 text-rpf-white rounded-full rpf-body font-semibold py-3 shadow-md">
                    {section.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                TESTIMONIES
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                Read inspiring stories from our community members and see how
                God is moving in their lives.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonies.map((testimony, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-rpf-gradient-primary rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="rpf-title text-lg text-rpf-black">
                        {testimony.name}
                      </h4>
                      <p className="text-sm text-rpf-black/60">
                        {testimony.location}
                      </p>
                    </div>
                  </div>
                  <p className="rpf-body text-rpf-black/80 leading-relaxed italic">
                    "{testimony.testimony}"
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-rpf-gradient-primary hover:opacity-90 text-rpf-white px-8 py-4 rounded-full rpf-body font-bold shadow-lg">
                Share Your Testimony
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                VISIT A BRANCH
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                Join us for worship and fellowship at one of our branch
                locations across Nigeria.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-rpf-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  Lagos Branch
                </h3>
                <p className="rpf-body text-rpf-black/70 mb-4">
                  123 Revival Street, Victoria Island, Lagos
                </p>
                <p className="rpf-body text-rpf-black/70 mb-6">
                  Sunday Service: 8:00 AM & 10:30 AM
                </p>
                <Button className="bg-rpf-blue hover:bg-rpf-blue/90 text-white rounded-full px-6 py-2">
                  Get Directions
                </Button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-rpf-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  Abuja Branch
                </h3>
                <p className="rpf-body text-rpf-black/70 mb-4">
                  456 Faith Avenue, Wuse 2, Abuja
                </p>
                <p className="rpf-body text-rpf-black/70 mb-6">
                  Sunday Service: 8:00 AM & 10:30 AM
                </p>
                <Button className="bg-rpf-purple hover:bg-rpf-purple/90 text-white rounded-full px-6 py-2">
                  Get Directions
                </Button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-rpf-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  Port Harcourt Branch
                </h3>
                <p className="rpf-body text-rpf-black/70 mb-4">
                  789 Grace Road, GRA Phase 2, Port Harcourt
                </p>
                <p className="rpf-body text-rpf-black/70 mb-6">
                  Sunday Service: 8:00 AM & 10:30 AM
                </p>
                <Button className="bg-rpf-red hover:bg-rpf-red/90 text-white rounded-full px-6 py-2">
                  Get Directions
                </Button>
              </div>
            </div>

            <div className="bg-rpf-gradient-primary rounded-3xl p-12 text-rpf-white text-center">
              <h3 className="rpf-title text-3xl mb-6">FIRST TIME VISITOR?</h3>
              <p className="rpf-body text-xl mb-4 text-rpf-white/90">
                We'd love to welcome you personally and help you feel at home in
                our community.
              </p>
              <p className="rpf-tagline text-rpf-gold mb-8">
                IT'S TIME TO SEEK THE LORD
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-rpf-white text-rpf-purple hover:bg-rpf-white/90 px-8 py-4 rounded-full rpf-body font-bold shadow-lg">
                  Plan Your Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-rpf-white text-rpf-white hover:bg-rpf-white hover:text-rpf-purple px-8 py-4 rounded-full rpf-body font-bold"
                >
                  Contact a Branch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                NEED HELP?
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                We're here to support you on your spiritual journey. Reach out
                for prayer, counselling, or any questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-rpf-blue rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="rpf-title text-xl text-rpf-black">
                      Call Us
                    </h3>
                    <p className="text-rpf-black/70">
                      Speak with our pastoral team
                    </p>
                  </div>
                </div>
                <p className="rpf-body text-rpf-black mb-4">
                  +234 (0) 123 456 7890
                </p>
                <p className="text-sm text-rpf-black/60">
                  Available Monday - Friday, 9AM - 5PM
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-rpf-purple rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="rpf-title text-xl text-rpf-black">
                      Email Us
                    </h3>
                    <p className="text-rpf-black/70">Send us your questions</p>
                  </div>
                </div>
                <p className="rpf-body text-rpf-black mb-4">
                  nextsteps@rpf.org
                </p>
                <p className="text-sm text-rpf-black/60">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-rpf-gradient-primary hover:opacity-90 text-rpf-white px-8 py-4 rounded-full rpf-body font-bold shadow-lg mr-4">
                Submit Prayer Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-rpf-black text-rpf-black hover:bg-rpf-black hover:text-white px-8 py-4 rounded-full rpf-body font-bold"
              >
                Schedule Counselling
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
