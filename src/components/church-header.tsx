import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChurchHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Events", path: "/events" },
    { name: "Next Steps", path: "/next-steps" },
    { name: "Contact", path: "/contact" },
  ];

  const siteDropdownItems = [
    { name: "RPF Europe", path: "/", description: "Main Church Site" },
    { name: "Crusades", path: "/crusades", description: "Revival Events" },
    { name: "The Ark", path: "/ark", description: "Venue Hire" },
  ];

  return (
    <header className="bg-rpf-white shadow-sm sticky top-0 z-50 border-b border-rpf-muted-grey/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* RPF Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 bg-rpf-gradient-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg">
              <Flame className="h-6 w-6 text-rpf-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-rpf-gold rounded-full flex items-center justify-center">
                <span className="text-rpf-black font-bold text-xs">✝</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="rpf-title text-xl text-rpf-black group-hover:text-rpf-purple transition-colors duration-200">
                Redeemed Pillar of Fire
              </h1>
              <p className="rpf-tagline text-xs tracking-wider">
                IT'S TIME TO SEEK THE LORD
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rpf-body text-sm font-medium transition-colors duration-200 hover:text-rpf-purple ${
                  isActive(item.path)
                    ? "text-rpf-purple font-semibold"
                    : "text-rpf-black/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Site Selector Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 rpf-body text-sm font-medium text-rpf-black/70 hover:text-rpf-purple transition-colors duration-200"
              >
                <span>Ministries</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-rpf-white rounded-lg shadow-lg border border-rpf-muted-grey/20 py-2">
                  {siteDropdownItems.map((site) => (
                    <Link
                      key={site.path}
                      to={site.path}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-3 hover:bg-rpf-purple/5 transition-colors duration-200"
                    >
                      <div className="rpf-body font-medium text-rpf-black">
                        {site.name}
                      </div>
                      <div className="rpf-body text-sm text-rpf-black/60">
                        {site.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button className="hidden sm:flex bg-rpf-gradient-primary hover:opacity-90 text-rpf-white px-6 py-2 rounded-full rpf-body text-sm font-medium transition-all duration-200 shadow-md">
              Plan Your Visit
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-rpf-purple/10 text-rpf-purple transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-rpf-muted-grey/20">
            <nav className="py-4 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rpf-body text-base font-medium transition-colors duration-200 hover:bg-rpf-purple/5 rounded-lg ${
                    isActive(item.path)
                      ? "text-rpf-purple bg-rpf-purple/5 font-semibold"
                      : "text-rpf-black/70"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Site Links */}
              <div className="pt-4 mt-4 border-t border-rpf-muted-grey/20">
                <div className="px-4 py-2 rpf-body text-xs font-semibold text-rpf-black/50 uppercase tracking-wider">
                  Other Ministries
                </div>
                {siteDropdownItems.map((site) => (
                  <Link
                    key={site.path}
                    to={site.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 hover:bg-rpf-purple/5 transition-colors duration-200 rounded-lg"
                  >
                    <div className="rpf-body font-medium text-rpf-black">
                      {site.name}
                    </div>
                    <div className="rpf-body text-sm text-rpf-black/60">
                      {site.description}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <Button className="w-full bg-rpf-gradient-primary hover:opacity-90 text-rpf-white py-3 rounded-full rpf-body font-medium shadow-md">
                  Plan Your Visit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Dropdown Overlay */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
}
