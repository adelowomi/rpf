import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Heart, Building, Wifi, Car, Coffee, Music, Camera, Star, Sparkles, Home } from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/ark")({
	component: ArkPage,
});

function ArkPage() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="min-h-screen bg-black">
			{/* Hero Section */}
			<section className="relative bg-black text-white py-32 overflow-hidden">
				{/* Background Pattern with Image */}
				<div className="absolute inset-0">
					{/* Event Venue Background Image */}
					<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
					<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
					<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10"></div>
					<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
				</div>
				
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-6xl mx-auto text-center">
						{/* Animated Logo */}
						<div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
								<Home className="h-16 w-16 text-black" />
							</div>
						</div>

						<div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
								The Ark
							</h1>
							<p className="text-2xl md:text-3xl mb-12 text-gray-300 font-light">
								Premium Venue Hire for Your Special Events
							</p>
						</div>

						<div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<div className="flex flex-col sm:flex-row gap-6 justify-center">
								<Button 
									size="lg" 
									className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
								>
									<Calendar className="mr-3 h-6 w-6" />
									Book Your Event
								</Button>
								<Button 
									size="lg" 
									variant="outline" 
									className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
								>
									<Building className="mr-3 h-6 w-6" />
									Virtual Tour
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Floating Elements */}
				<div className="absolute top-20 left-10 animate-bounce delay-1000">
					<Star className="h-8 w-8 text-yellow-400 opacity-60" />
				</div>
				<div className="absolute top-40 right-20 animate-bounce delay-2000">
					<Sparkles className="h-6 w-6 text-orange-400 opacity-60" />
				</div>
				<div className="absolute bottom-20 left-20 animate-bounce delay-3000">
					<Building className="h-10 w-10 text-yellow-400 opacity-40" />
				</div>
			</section>

			{/* About The Ark */}
			<section className="py-24 bg-gray-900 text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-6xl mx-auto">
						<div className="grid md:grid-cols-2 gap-16 items-center">
							<div>
								<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
									A Sanctuary for Every Occasion
								</h2>
								<div className="space-y-6 text-lg text-gray-300 leading-relaxed">
									<p>
										The Ark is our state-of-the-art venue facility, designed to host a wide range of events 
										from corporate conferences and weddings to community gatherings and cultural celebrations.
									</p>
									<p>
										With modern amenities, flexible spaces, and a dedicated team, we provide the perfect 
										setting for your memorable moments while supporting our ministry's mission.
									</p>
								</div>
								<div className="grid grid-cols-2 gap-6 mt-8">
									<div className="text-center p-6 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg border border-yellow-400/30 transform hover:scale-105 transition-transform duration-300">
										<Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
										<p className="font-bold text-2xl text-white">500+</p>
										<p className="text-gray-300">Capacity</p>
									</div>
									<div className="text-center p-6 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg border border-yellow-400/30 transform hover:scale-105 transition-transform duration-300">
										<Building className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
										<p className="font-bold text-2xl text-white">5</p>
										<p className="text-gray-300">Event Spaces</p>
									</div>
								</div>
							</div>
							<div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black p-8 rounded-lg shadow-2xl">
								<h3 className="text-3xl font-bold mb-6">Why Choose The Ark?</h3>
								<ul className="space-y-4">
									<li className="flex items-start">
										<Heart className="h-6 w-6 mr-4 mt-1 text-black/70" />
										<span className="text-lg">Professional event management team</span>
									</li>
									<li className="flex items-start">
										<Building className="h-6 w-6 mr-4 mt-1 text-black/70" />
										<span className="text-lg">Modern facilities with latest technology</span>
									</li>
									<li className="flex items-start">
										<Users className="h-6 w-6 mr-4 mt-1 text-black/70" />
										<span className="text-lg">Flexible spaces for any event size</span>
									</li>
									<li className="flex items-start">
										<MapPin className="h-6 w-6 mr-4 mt-1 text-black/70" />
										<span className="text-lg">Prime location with easy access</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Venue Spaces */}
			<section className="py-24 bg-black text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
							Our Venue Spaces
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
								<div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6">
									<h3 className="text-2xl font-bold">Main Auditorium</h3>
									<p className="text-black/70 font-semibold">Perfect for large events</p>
								</div>
								<div className="p-6">
									<div className="flex items-center mb-4">
										<Users className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">Capacity: 500 people</span>
									</div>
									<div className="flex items-center mb-4">
										<Music className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">Professional sound system</span>
									</div>
									<div className="flex items-center mb-6">
										<Camera className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">HD projection & lighting</span>
									</div>
									<p className="text-gray-400 text-sm mb-6">
										Ideal for conferences, concerts, graduations, and large celebrations.
									</p>
									<Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
										Book Now
									</Button>
								</div>
							</div>

							<div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
								<div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6">
									<h3 className="text-2xl font-bold">Fellowship Hall</h3>
									<p className="text-black/70 font-semibold">Intimate gatherings</p>
								</div>
								<div className="p-6">
									<div className="flex items-center mb-4">
										<Users className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">Capacity: 150 people</span>
									</div>
									<div className="flex items-center mb-4">
										<Coffee className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">Catering kitchen access</span>
									</div>
									<div className="flex items-center mb-6">
										<Wifi className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">High-speed WiFi</span>
									</div>
									<p className="text-gray-400 text-sm mb-6">
										Perfect for weddings, birthday parties, corporate meetings, and workshops.
									</p>
									<Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
										Book Now
									</Button>
								</div>
							</div>

							<div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
								<div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6">
									<h3 className="text-2xl font-bold">Conference Rooms</h3>
									<p className="text-black/70 font-semibold">Business meetings</p>
								</div>
								<div className="p-6">
									<div className="flex items-center mb-4">
										<Users className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">Capacity: 20-50 people</span>
									</div>
									<div className="flex items-center mb-4">
										<Camera className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">Video conferencing setup</span>
									</div>
									<div className="flex items-center mb-6">
										<Coffee className="h-5 w-5 text-yellow-400 mr-3" />
										<span className="text-gray-300">Refreshment facilities</span>
									</div>
									<p className="text-gray-400 text-sm mb-6">
										Equipped for business meetings, training sessions, and small conferences.
									</p>
									<Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
										Book Now
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Amenities */}
			<section className="py-24 bg-gray-900 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
							Premium Amenities
						</h2>
						<div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Car className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-lg font-bold mb-2 text-yellow-400">Free Parking</h3>
								<p className="text-gray-300 text-sm">200+ parking spaces available</p>
							</div>
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Wifi className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-lg font-bold mb-2 text-yellow-400">High-Speed WiFi</h3>
								<p className="text-gray-300 text-sm">Complimentary internet access</p>
							</div>
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Music className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-lg font-bold mb-2 text-yellow-400">Sound System</h3>
								<p className="text-gray-300 text-sm">Professional audio equipment</p>
							</div>
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Camera className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-lg font-bold mb-2 text-yellow-400">AV Equipment</h3>
								<p className="text-gray-300 text-sm">Projectors, screens, and lighting</p>
							</div>
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Coffee className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-lg font-bold mb-2 text-yellow-400">Catering</h3>
								<p className="text-gray-300 text-sm">Full kitchen and catering services</p>
							</div>
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Users className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-lg font-bold mb-2 text-yellow-400">Event Support</h3>
								<p className="text-gray-300 text-sm">Dedicated event coordination</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section className="py-24 bg-black text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
							Competitive Pricing
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-gray-900 rounded-lg shadow-2xl p-8 text-center border border-gray-800">
								<h3 className="text-2xl font-bold mb-4 text-white">Half Day</h3>
								<div className="text-4xl font-bold text-yellow-400 mb-4">£250</div>
								<p className="text-gray-300 mb-6">4 hours venue hire</p>
								<ul className="text-left space-y-2 mb-8">
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Basic AV equipment</span>
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Free parking</span>
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">WiFi access</span>
									</li>
								</ul>
								<Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
									Book Now
								</Button>
							</div>

							<div className="bg-gray-900 rounded-lg shadow-2xl p-8 text-center border-2 border-yellow-400">
								<div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
									Most Popular
								</div>
								<h3 className="text-2xl font-bold mb-4 text-white">Full Day</h3>
								<div className="text-4xl font-bold text-yellow-400 mb-4">£400</div>
								<p className="text-gray-300 mb-6">8 hours venue hire</p>
								<ul className="text-left space-y-2 mb-8">
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Full AV equipment</span>
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Free parking</span>
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">WiFi & catering access</span>
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Event coordinator</span>
									</li>
								</ul>
								<Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
									Book Now
								</Button>
							</div>

							<div className="bg-gray-900 rounded-lg shadow-2xl p-8 text-center border border-gray-800">
								<h3 className="text-2xl font-bold mb-4 text-white">Weekend</h3>
								<div className="text-4xl font-bold text-yellow-400 mb-4">£600</div>
								<p className="text-gray-300 mb-6">Full weekend access</p>
								<ul className="text-left space-y-2 mb-8">
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Premium AV package</span>
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Free parking</span>
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Full catering kitchen</span>
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										<span className="text-sm text-gray-300">Dedicated event team</span>
									</li>
								</ul>
								<Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
									Book Now
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-24 bg-gray-900 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
							Ready to Book Your Event?
						</h2>
						<p className="text-xl text-gray-300 mb-12 leading-relaxed">
							Contact our events team today to discuss your requirements and secure your preferred date. 
							We're here to make your event unforgettable.
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Button 
								size="lg" 
								className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
							>
								<Calendar className="mr-3 h-6 w-6" />
								Check Availability
							</Button>
							<Button 
								size="lg" 
								variant="outline" 
								className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
							>
								<MapPin className="mr-3 h-6 w-6" />
								Schedule a Visit
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
