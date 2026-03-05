import React from 'react';
import { Search, CheckCircle, Phone, Lock, Map, Clock } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Advanced Property Search",
            description: "Filter by location, budget, and type to easily pin down exactly what you're looking for."
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Verified Listings Only",
            description: "Rest assured knowing all our properties and landlords are personally verified by our expert team."
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Direct Owner Contact",
            description: "No middlemen or huge broker fees. Talk directly to landlords and finalize deals swiftly."
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Safe & Secure",
            description: "Your data and privacy are fully protected on our completely secure and encrypted platform."
        },
        {
            icon: <Map className="w-8 h-8" />,
            title: "Location-Based Search",
            description: "Find amazing properties near your current location using our interactive map view."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "24/7 Customer Support",
            description: "We're always here to help you find your home, with a dedicated support team available round the clock."
        }
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Our Benefits
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                        Why Choose NestFinder?
                    </h2>
                    <p className="text-lg text-gray-600">
                        We offer the most comprehensive and secure house hunting experience in Sri Lanka.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
