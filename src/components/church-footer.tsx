import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";

export default function ChurchFooter() {
	return (
		<footer className="bg-black text-white border-t border-gray-800">
			<div className="container mx-auto px-4 py-16">
				<div className="grid md:grid-cols-4 gap-8">
					{/* About Section */}
					<div>
						<div className="flex items-center space-x-3 mb-6">
							<div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
								<span className="text-black font-bold text-sm">RPF</span>
							</div>
							<h3 className="text-2xl font-bold">RPF Europe</h3>
						</div>
						<p className="text-gray-300 mb-6 leading-relaxed">
							Revival People Fellowship - Transforming lives through God's love across Europe and beyond.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
								<Facebook size={24} />
							</a>
							<a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
								<Twitter size={24} />
							</a>
							<a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
								<Instagram size={24} />
							</a>
							<a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
								<Youtube size={24} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
						<ul className="space-y-3">
							<li><Link to="/about/our-story" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Our Story</Link></li>
							<li><Link to="/about/what-we-believe" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">What We Believe</Link></li>
							<li><Link to="/about/senior-pastor" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Senior Pastor</Link></li>
							<li><Link to="/events" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Events</Link></li>
							<li><Link to="/resources" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Resources</Link></li>
						</ul>
					</div>

					{/* Ministries */}
					<div>
						<h4 className="text-xl font-bold mb-6 text-yellow-400">Ministries</h4>
						<ul className="space-y-3">
							<li><Link to="/ministries/rpf-europe" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">RPF Europe</Link></li>
							<li><Link to="/ministries/youth" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Youth Ministry</Link></li>
							<li><Link to="/ministries/children" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Children's Ministry</Link></li>
							<li><Link to="/crusades" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Crusades</Link></li>
							<li><Link to="/ark" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">The Ark</Link></li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-xl font-bold mb-6 text-yellow-400">Contact Us</h4>
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
								<div>
									<p className="text-gray-300">9-11 Cottage Green</p>
									<p className="text-gray-300">London, SE5 7ST</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
								<p className="text-gray-300">020 335 52829</p>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
								<p className="text-gray-300">admin@rpfeurope.com</p>
							</div>
						</div>
					</div>
				</div>

				{/* Biblical Quote */}
				<div className="border-t border-gray-800 mt-12 pt-12">
					<div className="text-center">
						<p className="text-2xl text-gray-400 mb-6 italic leading-relaxed max-w-4xl mx-auto">
							"And the LORD went before them by day in a pillar of a cloud, to lead them the way: and by night in a Pillar of Fire, to give them light"
						</p>
						<p className="text-yellow-400 font-bold text-lg">Exodus 13:21</p>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 pt-8 mt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<p className="text-gray-400 text-sm">
								© 2025 Redeemed Pillar of Fire Europe. All rights reserved.
							</p>
						</div>
						<div className="flex items-center space-x-2 text-sm text-gray-400">
							<span>Made with</span>
							<Heart className="h-4 w-4 text-yellow-400" />
							<span>for God's Kingdom</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
