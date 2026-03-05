import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Text Content */}
                    <div className="flex-1 text-white text-left max-w-2xl animate-fade-in-up">
                        <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
                            Sri Lanka's #1 Rental Platform
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Find Your Perfect <br /> <span className="text-gold">Home Today</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl">
                            Explore verified rental properties across Colombo, Kandy, Galle and more. Your dream home is one click away.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#properties"
                                className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-medium text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-gold/50"
                            >
                                Browse Properties
                            </a>
                            <a
                                href="#about"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-full font-medium text-center transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Stats Card */}
                    <div className="w-full lg:w-auto mt-12 lg:mt-0 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
                        <div className="glass rounded-2xl p-8 max-w-sm ml-auto text-navy">
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gold/30 flex items-center justify-center text-yellow-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-3xl font-bold">500+</h3>
                                        <p className="text-sm font-medium text-gray-700">Properties Listed</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-navy/20 flex items-center justify-center text-navy">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-3xl font-bold">20+</h3>
                                        <p className="text-sm font-medium text-gray-700">Cities Covered</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gold/30 flex items-center justify-center text-yellow-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-3xl font-bold">2,000+</h3>
                                        <p className="text-sm font-medium text-gray-700">Happy Tenants</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
