import React from 'react';
import { Home, MapPin, Award, Users } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <Home className="w-8 h-8" />, label: '500+', desc: 'Properties' },
        { icon: <MapPin className="w-8 h-8" />, label: '20+', desc: 'Cities' },
        { icon: <Award className="w-8 h-8" />, label: '5+ Years', desc: 'Experience' },
        { icon: <Users className="w-8 h-8" />, label: '2000+', desc: 'Happy Tenants' },
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column: Image Area */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                                alt="Modern House Interior"
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Decorative block */}
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold rounded-2xl -z-10 hidden md:block opacity-20"></div>
                        <div className="absolute -top-8 -left-8 w-64 h-64 border-4 border-navy rounded-2xl -z-10 hidden md:block opacity-10"></div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
                            Discover Our Story
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                            About NestFinder
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            NestFinder is Sri Lanka's most trusted house rental platform, connecting landlords and tenants with ease. With over 500 verified listings across 20+ cities, we make finding your ideal rental home fast, safe, and hassle-free. Our mission is to simplify renting for every Sri Lankan.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 mt-12">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                                >
                                    <div className="text-gold mb-4 p-3 bg-white rounded-lg inline-block shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                    <h4 className="font-serif text-2xl font-bold text-navy mb-1">{stat.label}</h4>
                                    <p className="text-gray-500 font-medium">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
