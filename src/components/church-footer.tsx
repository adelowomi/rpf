import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Flame,
} from "lucide-react";

export default function ChurchFooter() {
  return (
    <footer className="bg-rpf-gradient-primary text-white border-t-2 border-yellow-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14 bg-rpf-gradient-fire rounded-full flex items-center justify-center shadow-xl border-2 border-yellow-400/60">
                <Flame className="h-7 w-7 text-white" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-black font-bold text-xs">✝</span>
                </div>
                {/* Dove symbol for Holy Spirit */}
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs">🕊</span>
                </div>
              </div>
              <div>
                <h3 className="rpf-title text-xl text-white">
                  Redeemed Pillar of Fire
                </h3>
                <p className="rpf-tagline text-xs tracking-wider text-yellow-400">
                  IT'S TIME TO SEEK THE LORD
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mb-6">
              <h5 className="rpf-body font-semibold text-yellow-400 mb-2">
                Our Mission
              </h5>
              <p className="rpf-body text-white/80 leading-relaxed text-sm">
                To spark and sustain revival and restore the early church as
                defined in Acts until the coming of Christ.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="mb-6">
              <h5 className="rpf-body font-semibold text-yellow-400 mb-2">
                Our Vision
              </h5>
              <p className="rpf-body text-white/80 leading-relaxed text-sm italic">
                "A city beyond walls: Jerusalem shall be inhabited as towns
                without walls... For I, saith the Lord, will be unto her a wall
                of fire round about, and will be the glory in the midst of her."
                - Zechariah 2:4-5
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/RPF.UK/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com/rpfchurchuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/rpfeurope/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h4 className="rpf-title text-xl mb-6 text-yellow-400">
              Our Core Values
            </h4>

            {/* Core Values List */}
            <div className="space-y-4 mb-6">
              <div>
                <h5 className="rpf-body font-semibold text-white text-sm mb-1">
                  Love for Christ & the Brethren
                </h5>
                <p className="rpf-body text-white/70 text-xs">
                  Language radiates Christ's love
                </p>
              </div>
              <div>
                <h5 className="rpf-body font-semibold text-white text-sm mb-1">
                  Sound Doctrine
                </h5>
                <p className="rpf-body text-white/70 text-xs">
                  Deep Word connection & personal God-seeking
                </p>
              </div>
              <div>
                <h5 className="rpf-body font-semibold text-white text-sm mb-1">
                  Transformation & Growth
                </h5>
                <p className="rpf-body text-white/70 text-xs">
                  Power of Christ transformation to holiness
                </p>
              </div>
              <div>
                <h5 className="rpf-body font-semibold text-white text-sm mb-1">
                  Spiritual Discipline
                </h5>
                <p className="rpf-body text-white/70 text-xs">
                  Prayer, fasting, Word reading, evangelism
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  About Pastor Austin
                </Link>
              </li>
              <li>
                <Link
                  to="/next-steps"
                  className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  Next Steps
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  Get Connected
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Ministry Network */}
          <div>
            <h4 className="rpf-title text-xl mb-6 text-yellow-400">
              Global Ministry Network
            </h4>

            {/* Branded House Structure */}
            <div className="space-y-4 mb-6">
              <div>
                <h5 className="rpf-body font-semibold text-white text-sm mb-2">
                  Regional Ministries
                </h5>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/ministries"
                      className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      RPF Europe
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ministries"
                      className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      RPF Africa
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ministries"
                      className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      RPF North America
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="rpf-body font-semibold text-white text-sm mb-2">
                  Specialized Ministries
                </h5>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/ministries"
                      className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      RPF on Campus
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ministries"
                      className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      RPF Fellowship
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/crusades"
                      className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      Revival Crusades
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ark"
                      className="rpf-body text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      The Ark
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tagline */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-yellow-400/50 shadow-lg">
              <p className="rpf-tagline text-yellow-400 text-xs text-center font-semibold">
                IT'S TIME TO SEEK THE LORD
              </p>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="rpf-title text-xl mb-6 text-yellow-400">Visit Us</h4>

            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="rpf-body text-white/80 font-semibold">
                    RPF Europe Headquarters
                  </p>
                  <p className="rpf-body text-white/80 text-sm">
                    9-11 Cottage Green
                  </p>
                  <p className="rpf-body text-white/80 text-sm">
                    London, SE5 7ST
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <p className="rpf-body text-white/80">020 335 52829</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <p className="rpf-body text-white/80">admin@rpfeurope.com</p>
              </div>
            </div>

            {/* Service Times */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/50 shadow-lg">
              <h5 className="rpf-body font-semibold text-yellow-400 mb-3 text-sm">
                Service Times
              </h5>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="rpf-body text-white/80">
                    Sunday Service:
                  </span>
                  <span className="rpf-body text-yellow-400 font-semibold">
                    10:00 AM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="rpf-body text-white/80">
                    Midweek Prayer:
                  </span>
                  <span className="rpf-body text-yellow-400 font-semibold">
                    Wed 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="rpf-body text-white/80">
                    Youth Ministry:
                  </span>
                  <span className="rpf-body text-yellow-400 font-semibold">
                    Fri 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scripture Foundation */}
        <div className="border-t border-yellow-400/30 mt-12 pt-12">
          <div className="text-center mb-8">
            <h4 className="rpf-title text-2xl text-yellow-400 mb-8">
              Our Scripture Foundation
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tagline Scripture - Hosea 10:12 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/50 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-black font-bold text-lg">📖</span>
                </div>
                <p className="rpf-body text-lg text-white/90 mb-4 italic leading-relaxed">
                  "Sow to yourselves in righteousness, reap in mercy; break up
                  your fallow ground: for it is time to seek the LORD, till he
                  come and rain righteousness upon you."
                </p>
                <p className="rpf-tagline text-yellow-400 font-bold">
                  Hosea 10:12
                </p>
                <p className="rpf-body text-white/60 text-sm mt-2">
                  Our Tagline Foundation
                </p>
              </div>
            </div>

            {/* Name Scripture - Exodus 13:21 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/50 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Flame className="h-6 w-6 text-black" />
                </div>
                <p className="rpf-body text-lg text-white/90 mb-4 italic leading-relaxed">
                  "And the LORD went before them by day in a pillar of a cloud,
                  to lead them the way: and by night in a Pillar of Fire, to
                  give them light"
                </p>
                <p className="rpf-tagline text-yellow-400 font-bold">
                  Exodus 13:21
                </p>
                <p className="rpf-body text-white/60 text-sm mt-2">
                  Our Name Origin
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-400/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="rpf-body text-white/60 text-sm text-center md:text-left">
                © 2025 Redeemed Pillar of Fire (RPF). All rights reserved.
              </p>
              <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
              <p className="rpf-body text-white/60 text-xs text-center md:text-left">
                Founded October 2014 by Pastor Austin E-Ben
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2 rpf-body text-sm text-white/60">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-yellow-400 animate-pulse" />
                <span>for God's Kingdom</span>
              </div>
              <p className="rpf-tagline text-yellow-400 text-xs tracking-wider">
                IT'S TIME TO SEEK THE LORD
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
