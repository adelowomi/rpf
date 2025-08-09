import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Heart, Play, Globe, Clock, UserCheck, Flame, Star, Zap, Target } from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/crusades")({
	component: CrusadesPage,
});

function CrusadesPage() {
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
					{/* Crusade/Revival Background Image */}
					<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-25"></div>
					<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
					<div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-500/10"></div>
					<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_50%)]"></div>
				</div>
				
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-6xl mx-auto text-center">
						{/* Animated Logo */}
						<div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
								<Zap className="h-16 w-16 text-black" />
							</div>
						</div>

						<div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
								RPF Europe Crusades
							</h1>
							<p className="text-2xl md:text-3xl mb-12 text-gray-300 font-light">
								Bringing Revival to Every City, Every Nation
							</p>
						</div>

						<div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<div className="flex flex-col sm:flex-row gap-6 justify-center">
								<Button 
									size="lg" 
									className="bg-gradient-to-r from-orange-400 to-red-500 text-black hover:from-orange-500 hover:to-red-600 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
								>
									<UserCheck className="mr-3 h-6 w-6" />
									Register Now
								</Button>
								<Button 
									size="lg" 
									variant="outline" 
									className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
								>
									<Play className="mr-3 h-6 w-6" />
									Watch Previous Crusades
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Floating Elements */}
				<div className="absolute top-20 left-10 animate-bounce delay-1000">
					<Star className="h-8 w-8 text-orange-400 opacity-60" />
				</div>
				<div className="absolute top-40 right-20 animate-bounce delay-2000">
					<Flame className="h-6 w-6 text-red-400 opacity-60" />
				</div>
				<div className="absolute bottom-20 left-20 animate-bounce delay-3000">
					<Target className="h-10 w-10 text-orange-400 opacity-40" />
				</div>
			</section>

			{/* About Crusades */}
			<section className="py-24 bg-gray-900 text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-red-500/5"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-6xl mx-auto">
						<div className="grid md:grid-cols-2 gap-16 items-center">
							<div>
								<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
									The Great Commission in Action
								</h2>
								<div className="space-y-6 text-lg text-gray-300 leading-relaxed">
									<p>
										Our crusades are powerful evangelistic events designed to reach the lost, heal the broken, 
										and ignite revival across Europe. Through dynamic preaching, worship, and prayer, we see 
										thousands of lives transformed by the Gospel.
									</p>
									<p>
										Join us as we take the message of hope and salvation to every corner of Europe, 
										fulfilling the Great Commission one city at a time.
									</p>
								</div>
								<div className="grid grid-cols-2 gap-6 mt-8">
									<div className="text-center p-6 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg border border-orange-400/30 transform hover:scale-105 transition-transform duration-300">
										<Globe className="h-12 w-12 text-orange-400 mx-auto mb-4" />
										<p className="font-bold text-2xl text-white">50+</p>
										<p className="text-gray-300">Cities Reached</p>
									</div>
									<div className="text-center p-6 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg border border-orange-400/30 transform hover:scale-105 transition-transform duration-300">
										<Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
										<p className="font-bold text-2xl text-white">100K+</p>
										<p className="text-gray-300">Lives Touched</p>
									</div>
								</div>
							</div>
							<div className="bg-gradient-to-br from-orange-400 to-red-500 text-black p-8 rounded-lg shadow-2xl">
								<h3 className="text-3xl font-bold mb-6">Mission & Values</h3>
								<ul className="space-y-4">
									<li className="flex items-start">
										<Heart className="h-6 w-6 mr-4 mt-1 text-black/70" />
										<span className="text-lg">Proclaim the Gospel with power and demonstration</span>
									</li>
									<li className="flex items-start">
										<Users className="h-6 w-6 mr-4 mt-1 text-black/70" />
										<span className="text-lg">Unite churches across denominational lines</span>
									</li>
									<li className="flex items-start">
										<Globe className="h-6 w-6 mr-4 mt-1 text-black/70" />
										<span className="text-lg">Reach every nation with the love of Christ</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Upcoming Crusades */}
			<section className="py-24 bg-black text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
							Upcoming Crusades
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
								<div className="bg-gradient-to-r from-orange-400 to-red-500 text-black p-6">
									<h3 className="text-2xl font-bold">London Revival</h3>
									<p className="text-black/70 font-semibold">United Kingdom</p>
								</div>
								<div className="p-6">
									<div className="flex items-center mb-4">
										<Calendar className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">March 15-17, 2025</span>
									</div>
									<div className="flex items-center mb-4">
										<MapPin className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">Wembley Arena</span>
									</div>
									<div className="flex items-center mb-6">
										<Clock className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">7:00 PM Daily</span>
									</div>
									<Button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-black hover:from-orange-500 hover:to-red-600 font-bold">
										Register Now
									</Button>
								</div>
							</div>

							<div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
								<div className="bg-gradient-to-r from-orange-400 to-red-500 text-black p-6">
									<h3 className="text-2xl font-bold">Paris Awakening</h3>
									<p className="text-black/70 font-semibold">France</p>
								</div>
								<div className="p-6">
									<div className="flex items-center mb-4">
										<Calendar className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">April 5-7, 2025</span>
									</div>
									<div className="flex items-center mb-4">
										<MapPin className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">Palais Omnisports</span>
									</div>
									<div className="flex items-center mb-6">
										<Clock className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">7:30 PM Daily</span>
									</div>
									<Button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-black hover:from-orange-500 hover:to-red-600 font-bold">
										Register Now
									</Button>
								</div>
							</div>

							<div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
								<div className="bg-gradient-to-r from-orange-400 to-red-500 text-black p-6">
									<h3 className="text-2xl font-bold">Berlin Breakthrough</h3>
									<p className="text-black/70 font-semibold">Germany</p>
								</div>
								<div className="p-6">
									<div className="flex items-center mb-4">
										<Calendar className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">May 10-12, 2025</span>
									</div>
									<div className="flex items-center mb-4">
										<MapPin className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">Mercedes-Benz Arena</span>
									</div>
									<div className="flex items-center mb-6">
										<Clock className="h-5 w-5 text-orange-400 mr-3" />
										<span className="text-gray-300">7:00 PM Daily</span>
									</div>
									<Button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-black hover:from-orange-500 hover:to-red-600 font-bold">
										Register Now
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* The Experience */}
			<section className="py-24 bg-gray-900 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
							The Crusade Experience
						</h2>
						<div className="grid md:grid-cols-4 gap-8">
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Heart className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-xl font-bold mb-4 text-orange-400">Powerful Worship</h3>
								<p className="text-gray-300">Experience heaven-touching worship that prepares hearts for God's word</p>
							</div>
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Play className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-xl font-bold mb-4 text-orange-400">Anointed Preaching</h3>
								<p className="text-gray-300">Life-changing messages delivered with power and demonstration</p>
							</div>
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Users className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-xl font-bold mb-4 text-orange-400">Mass Salvation</h3>
								<p className="text-gray-300">Witness thousands surrender their lives to Jesus Christ</p>
							</div>
							<div className="text-center group">
								<div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<Flame className="h-10 w-10 text-black" />
								</div>
								<h3 className="text-xl font-bold mb-4 text-orange-400">Divine Healing</h3>
								<p className="text-gray-300">Experience God's healing power in miraculous ways</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-24 bg-black text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
							Join the Revival Movement
						</h2>
						<p className="text-xl text-gray-300 mb-12 leading-relaxed">
							Don't miss this opportunity to be part of what God is doing across Europe. 
							Register for a crusade near you or bring your entire church family.
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Button 
								size="lg" 
								className="bg-gradient-to-r from-orange-400 to-red-500 text-black hover:from-orange-500 hover:to-red-600 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
							>
								<UserCheck className="mr-3 h-6 w-6" />
								Individual Registration
							</Button>
							<Button 
								size="lg" 
								variant="outline" 
								className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
							>
								<Users className="mr-3 h-6 w-6" />
								Group Registration
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
