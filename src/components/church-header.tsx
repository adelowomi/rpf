import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function ChurchHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const location = useLocation();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const toggleDropdown = (menu: string) => {
		setActiveDropdown(activeDropdown === menu ? null : menu);
	};

	const getTabStyle = (path: string) => {
		const isActive = location.pathname === path || 
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
								<h1 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">RPF Europe</h1>
								<p className="text-sm text-gray-400">Revival People Fellowship</p>
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

				{/* Navigation Menu */}
				<nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-4`}>
					<div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
						
						{/* About Dropdown */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown('about')}
								className="flex items-center space-x-1 text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300"
							>
								<span>About</span>
								<ChevronDown size={16} />
							</button>
							{activeDropdown === 'about' && (
								<div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 z-50">
									<Link to="/about/our-story" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Our Story</Link>
									<Link to="/about/mission-values" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Mission & Values</Link>
									<Link to="/about/what-we-believe" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">What We Believe</Link>
									<Link to="/about/senior-pastor" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Senior Pastor E-Ben</Link>
								</div>
							)}
						</div>

						{/* Ministries Dropdown */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown('ministries')}
								className="flex items-center space-x-1 text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300"
							>
								<span>Ministries</span>
								<ChevronDown size={16} />
							</button>
							{activeDropdown === 'ministries' && (
								<div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 z-50">
									<Link to="/ministries/rpf-europe" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">RPF Europe</Link>
									<Link to="/ministries/youth" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Youth Ministry</Link>
									<Link to="/ministries/children" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Children's Ministry</Link>
								</div>
							)}
						</div>

						{/* How to Find Us Dropdown */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown('find-us')}
								className="flex items-center space-x-1 text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300"
							>
								<span>How to Find Us</span>
								<ChevronDown size={16} />
							</button>
							{activeDropdown === 'find-us' && (
								<div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 z-50">
									<Link to="/find-us/nearest-branch" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Find Your Nearest Branch</Link>
									<Link to="/find-us/campus" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Find Us on Campus</Link>
								</div>
							)}
						</div>

						{/* Connect Dropdown */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown('connect')}
								className="flex items-center space-x-1 text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300"
							>
								<span>Connect</span>
								<ChevronDown size={16} />
							</button>
							{activeDropdown === 'connect' && (
								<div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 z-50">
									<Link to="/connect/baptism" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Baptism</Link>
									<Link to="/connect/support-counselling" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Support & Counselling</Link>
									<Link to="/connect/prayer-requests" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Prayer Requests</Link>
									<Link to="/connect/mentorship" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">Join a Mentorship Group</Link>
								</div>
							)}
						</div>

						{/* Simple Links */}
						<Link to="/events" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Events</Link>
						<Link to="/resources" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Resources</Link>
						<Link to="/contact" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Contact</Link>
						<Link to="/venue-hire" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Venue Hire</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}
