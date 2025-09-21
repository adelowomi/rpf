import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Heart,
  BookOpen,
  Droplets,
  HandHeart,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/next-steps")({
  component: NextStepsPage,
});

function NextStepsPage() {
  const steps = [
    {
      number: "01",
      title: "Visit Us",
      description:
        "Join us for a Sunday service and experience our welcoming community firsthand.",
      icon: Calendar,
      action: "Plan Your Visit",
      color: "bg-blue-500",
    },
    {
      number: "02",
      title: "Connect",
      description:
        "Meet new people and build meaningful relationships through our small groups.",
      icon: Users,
      action: "Find a Group",
      color: "bg-green-500",
    },
    {
      number: "03",
      title: "Grow",
      description:
        "Deepen your faith through Bible study, prayer, and spiritual mentorship.",
      icon: BookOpen,
      action: "Start Learning",
      color: "bg-purple-500",
    },
    {
      number: "04",
      title: "Serve",
      description:
        "Use your gifts and talents to make a difference in our community and beyond.",
      icon: HandHeart,
      action: "Get Involved",
      color: "bg-orange-500",
    },
  ];

  const opportunities = [
    {
      title: "Baptism",
      description: "Take the next step in your faith journey through baptism.",
      icon: Droplets,
    },
    {
      title: "Mentorship",
      description:
        "Connect with experienced believers for guidance and support.",
      icon: Heart,
    },
    {
      title: "Leadership Development",
      description:
        "Develop your leadership skills and help others grow in faith.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              YOUR NEXT STEPS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Whether you're new to faith or looking to grow deeper, we're here
              to help you on your journey
            </p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 rounded-full font-bold text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                FOUR SIMPLE STEPS
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your faith journey doesn't have to be complicated. Here's how to
                get started.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <Button className="bg-black hover:bg-gray-800 text-white rounded-full font-semibold px-6 py-2">
                    {step.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                GROWTH OPPORTUNITIES
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Take your faith to the next level with these meaningful
                opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <opportunity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-semibold">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New to Faith Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-black mb-6">NEW TO FAITH?</h2>
              <p className="text-xl mb-8 opacity-90">
                We'd love to help you understand what it means to follow Jesus
                and find your purpose in God's plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold">
                  Talk to Someone
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-bold"
                >
                  Learn About Jesus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              QUESTIONS?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help you take your next step. Don't hesitate to
              reach out.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
