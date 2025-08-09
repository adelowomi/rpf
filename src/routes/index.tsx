import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Flame, Church, Users, Calendar, Instagram, Facebook, Twitter, Heart, BookOpen, Globe, Star } from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
				
				{/* Floating Animation Elements */}
				<div className="absolute top-20 left-10 animate-bounce delay-1000">
					<Star className="h-6 w-6 text-orange-400 opacity-60" />
				</div>
				<div className="absolute top-40 right-20 animate-bounce delay-2000">
					<Heart className="h-8 w-8 text-red-400 opacity-50" />
				</div>
				<div className="absolute bottom-32 left-20 animate-bounce delay-3000">
					<Globe className="h-7 w-7 text-orange-500 opacity-40" />
				</div>
				<div className="absolute top-60 right-10 animate-pulse delay-4000">
					<BookOpen className="h-6 w-6 text-red-500 opacity-50" />
				</div>
				
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						{/* Animated Logo */}
						<div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300">
								<Flame className="h-10 w-10 text-white animate-bounce" />
							</div>
						</div>

						<div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 bg-clip-text text-transparent animate-gradient-x">
								It's Time to Seek The Lord
							</h1>
							<p className="text-xl md:text-2xl mb-12 text-gray-600 font-light max-w-3xl mx-auto">
								Welcome to Redeemed Pillar of Fire Europe - A community of believers dedicated to revival, prayer, and spreading God's love across Europe and beyond.
							</p>
						</div>

						<div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<Button 
								size="lg" 
								className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-4 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
							>
								<MapPin className="mr-2 h-5 w-5 animate-bounce" />
								Find Your Nearest Branch
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Ministry Images Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="grid md:grid-cols-3 gap-8">
							<div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift animate-fade-in-up stagger-1">
								<div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-orange-100 to-red-100">
									<img 
										src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
										alt="Church Community" 
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
									<h3 className="text-xl font-bold mb-2">Community Worship</h3>
									<p className="text-sm">Join us in fellowship and praise</p>
								</div>
								<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
										<Heart className="h-4 w-4 text-white" />
									</div>
								</div>
							</div>
							
							<div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift animate-fade-in-up stagger-2">
								<div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-orange-100 to-red-100">
									<img 
										src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
										alt="Prayer and Revival" 
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
									<h3 className="text-xl font-bold mb-2">Prayer & Revival</h3>
									<p className="text-sm">Experience God's transforming power</p>
								</div>
								<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
										<Flame className="h-4 w-4 text-white" />
									</div>
								</div>
							</div>
							
							<div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift animate-fade-in-up stagger-3">
								<div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-orange-100 to-red-100">
									<img 
										src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
										alt="Youth Ministry" 
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
									<h3 className="text-xl font-bold mb-2">Youth Ministry</h3>
									<p className="text-sm">Empowering the next generation</p>
								</div>
								<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
										<Users className="h-4 w-4 text-white" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pastor Austin E-Ben Section */}
			<section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
				<div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-white/90"></div>
				
				{/* Floating elements for pastor section */}
				<div className="absolute top-20 right-10 animate-pulse delay-1000">
					<Church className="h-8 w-8 text-orange-400 opacity-30" />
				</div>
				<div className="absolute bottom-20 left-10 animate-bounce delay-2000">
					<Heart className="h-6 w-6 text-red-400 opacity-40" />
				</div>
				
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-6xl mx-auto">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="order-2 lg:order-1">
								<div className="relative group">
									<div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
										<div className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden">
											<img 
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
												alt="Pastor Austin E-Ben" 
												className="w-72 h-72 rounded-full object-cover opacity-20 absolute inset-2"
											/>
											<div className="text-center relative z-10">
												<div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
													<Church className="h-10 w-10 text-white" />
												</div>
												<p className="text-orange-600 font-semibold text-lg">Pastor</p>
												<p className="text-gray-900 font-bold text-xl">Austin E-Ben</p>
											</div>
										</div>
									</div>
									{/* Decorative rings */}
									<div className="absolute inset-0 rounded-full border-2 border-orange-200 animate-ping opacity-20"></div>
									<div className="absolute inset-4 rounded-full border border-red-200 animate-pulse opacity-30"></div>
								</div>
							</div>
							<div className="order-1 lg:order-2">
								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 animate-fade-in-up">
									Pastor Austin E-Ben
								</h2>
								<div className="space-y-6 text-lg text-gray-700 leading-relaxed">
									<p className="transform transition-all duration-700 hover:translate-x-2">
										Meet Pastor Augustine E-Ben, the Head Pastor of Redeemed Pillar of Fire Europe. Pastor Austin E-Ben first founded the church in October 2014, and since then the ministry has expanded greatly with several branches and university fellowships worldwide.
									</p>
									<p className="transform transition-all duration-700 hover:translate-x-2">
										His love for God is reflected in his teaching of the word, love for souls and his dedication to the work of God. His goal is to bring souls from darkness to light, that they may receive forgiveness of sins and the inheritance promised to those who are sanctified by faith in Jesus Christ.
									</p>
									<p className="transform transition-all duration-700 hover:translate-x-2">
										With the help of God, RPF Ministry will bring revival that will sweep the nations and restore the fear of the Lord. The ministry was built on love and prayer, and as a church, we steadfastly dedicate ourselves to prayer and pour out love into one another, as we all aim to look a little bit more like Christ daily.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-red-50/30"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Our Ministry Impact</h2>
						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div className="group transform transition-all duration-500 hover:scale-105">
								<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounce">
									<Church className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Multiple Branches</h3>
								<p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Serving communities across London and England</p>
							</div>
							<div className="group transform transition-all duration-500 hover:scale-105">
								<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounce delay-200">
									<Users className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">University Fellowships</h3>
								<p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Reaching students across campuses</p>
							</div>
							<div className="group transform transition-all duration-500 hover:scale-105">
								<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounce delay-500">
									<Calendar className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Since 2014</h3>
								<p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Over a decade of faithful ministry</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Church Life</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the vibrant community and spiritual growth at RPF Europe through these moments</p>
						</div>
						
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up stagger-1">
								<img 
									src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
									alt="Sunday Service" 
									className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<h4 className="font-bold">Sunday Service</h4>
								</div>
							</div>
							
							<div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up stagger-2">
								<img 
									src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
									alt="Bible Study" 
									className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<h4 className="font-bold">Bible Study</h4>
								</div>
							</div>
							
							<div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up stagger-3">
								<img 
									src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
									alt="Baptism Service" 
									className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<h4 className="font-bold">Baptism</h4>
								</div>
							</div>
							
							<div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up stagger-4">
								<img 
									src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
									alt="Community Outreach" 
									className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<h4 className="font-bold">Community Outreach</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section with Images */}
			<section className="py-20 bg-gray-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Lives Transformed</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from our community members about their journey of faith</p>
						</div>
						
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up stagger-1">
								<div className="flex items-center mb-6">
									<img 
										src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
										alt="Sarah Johnson" 
										className="w-16 h-16 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className="font-bold text-gray-900">Sarah Johnson</h4>
										<p className="text-gray-600 text-sm">Member since 2018</p>
									</div>
								</div>
								<p className="text-gray-700 italic">"RPF Europe has been a beacon of hope in my life. The community here is truly loving and supportive."</p>
							</div>
							
							<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up stagger-2">
								<div className="flex items-center mb-6">
									<img 
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
										alt="Michael Chen" 
										className="w-16 h-16 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className="font-bold text-gray-900">Michael Chen</h4>
										<p className="text-gray-600 text-sm">Youth Leader</p>
									</div>
								</div>
								<p className="text-gray-700 italic">"The youth ministry here has helped me grow in faith and leadership. Pastor Austin's teachings are life-changing."</p>
							</div>
							
							<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up stagger-3">
								<div className="flex items-center mb-6">
									<img 
										src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
										alt="Grace Okafor" 
										className="w-16 h-16 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className="font-bold text-gray-900">Grace Okafor</h4>
										<p className="text-gray-600 text-sm">Worship Team</p>
									</div>
								</div>
								<p className="text-gray-700 italic">"Being part of the worship team has deepened my relationship with God. This church family is amazing."</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 lg:py-32 bg-white relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
							Get In Touch
						</h2>
						<p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
							We'd love to hear from you. Reach out to us and become part of our growing community.
						</p>
						
						<div className="grid md:grid-cols-3 gap-8 mb-16">
							<div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
								<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<MapPin className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-xl font-bold mb-4 text-gray-900">Address (HQ)</h3>
								<div className="text-gray-600 space-y-1">
									<p>9-11 Cottage Green</p>
									<p>London</p>
									<p>SE5 7ST</p>
								</div>
								<div className="mt-4">
									<img 
										src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
										alt="Church Building" 
										className="w-full h-32 object-cover rounded-lg opacity-80"
									/>
								</div>
							</div>
							
							<div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
								<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<Phone className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-xl font-bold mb-4 text-gray-900">Telephone</h3>
								<p className="text-gray-600 text-lg font-medium mb-4">020 335 52829</p>
								<div className="mt-4">
									<img 
										src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
										alt="Phone Contact" 
										className="w-full h-32 object-cover rounded-lg opacity-80"
									/>
								</div>
							</div>
							
							<div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
								<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<Mail className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-xl font-bold mb-4 text-gray-900">Email</h3>
								<p className="text-gray-600 text-lg font-medium mb-4">admin@rpfeurope.com</p>
								<div className="mt-4">
									<img 
										src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
										alt="Email Contact" 
										className="w-full h-32 object-cover rounded-lg opacity-80"
									/>
								</div>
							</div>
						</div>

						{/* Social Media */}
						<div className="mb-16">
							<h3 className="text-2xl font-bold mb-8 text-gray-900">Follow Us</h3>
							<div className="flex justify-center space-x-6">
								<a href="https://www.instagram.com/rpfeurope/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 animate-float">
									<Instagram className="h-6 w-6" />
								</a>
								<a href="https://www.facebook.com/RPF.UK/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 animate-float stagger-1">
									<Facebook className="h-6 w-6" />
								</a>
								<a href="https://twitter.com/rpfchurchuk" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 animate-float stagger-2">
									<Twitter className="h-6 w-6" />
								</a>
							</div>
						</div>

						{/* Biblical Quote */}
						<div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg relative overflow-hidden">
							<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
							<div className="relative z-10">
								<blockquote className="text-2xl md:text-3xl text-gray-700 mb-6 italic leading-relaxed">
									"And the LORD went before them by day in a pillar of a cloud, to lead them the way: and by night in a Pillar of Fire, to give them light"
								</blockquote>
								<cite className="text-orange-600 font-bold text-lg">Exodus 13:21</cite>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
