import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function ChurchHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getTabStyle = (path: string) => {
    const isActive =
      location.pathname === path ||
      (path === "/crusades" && location.pathname.startsWith("/crusades")) ||
      (path === "/ark" && location.pathname.startsWith("/ark")) ||
      (path === "/" && location.pathname === "/");

    if (path === "/") {
      return isActive && location.pathname === "/"
        ? "px-6 py-3 text-yellow-400 bg-gray-900 rounded-lg font-semibold border-2 border-yellow-400 shadow-lg transform scale-105 transition-all duration-300"
        : "px-6 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg font-semibold transition-all duration-300 hover:scale-105";
    } else if (path === "/crusades") {
      return isActive
        ? "px-6 py-3 text-orange-400 bg-gray-900 rounded-lg font-semibold border-2 border-orange-400 shadow-lg transform scale-105 transition-all duration-300"
        : "px-6 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800 rounded-lg font-semibold transition-all duration-300 hover:scale-105";
    } else if (path === "/ark") {
      return isActive
        ? "px-6 py-3 text-yellow-400 bg-gray-900 rounded-lg font-semibold border-2 border-yellow-400 shadow-lg transform scale-105 transition-all duration-300"
        : "px-6 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg font-semibold transition-all duration-300 hover:scale-105";
    }
    return "px-6 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg font-semibold transition-all duration-300 hover:scale-105";
  };

  return (
    <header className="bg-black shadow-2xl sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b border-gray-800">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-black font-bold text-lg">RPF</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  RPF Europe
                </h1>
                <p className="text-sm text-gray-400">
                  Revival People Fellowship
                </p>
              </div>
            </Link>
          </div>

          {/* Main Site Tabs */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={getTabStyle("/")}>
              RPF Europe
            </Link>
            <Link to="/crusades" className={getTabStyle("/crusades")}>
              Crusades
            </Link>
            <Link to="/ark" className={getTabStyle("/ark")}>
              The Ark
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 text-white transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Menu - Simplified for RPF Europe */}
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block py-4`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
            {/* Simple Links - 4 Main Pages */}
            <Link
              to="/"
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/ministries"
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300"
            >
              Ministries
            </Link>
            <Link
              to="/next-steps"
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300"
            >
              Next Steps
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300"
            >
              Contact & Resources
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
