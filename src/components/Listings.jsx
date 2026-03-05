import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
    {
        id: 1,
        title: "Modern 2-Bedroom Apartment",
        location: "Colombo 03, Western Province",
        rent: "Rs. 65,000/month",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
        description: "Spacious apartment with sea view, fully furnished, 24/7 security."
    },
    {
        id: 2,
        title: "Luxury Villa with Pool",
        location: "Nugegoda, Colombo",
        rent: "Rs. 250,000/month",
        type: "Luxury Villa",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600",
        description: "5-bedroom luxury villa with private pool, garden and smart home system."
    },
    {
        id: 3,
        title: "Cozy Studio Apartment",
        location: "Kandy City Center",
        rent: "Rs. 28,000/month",
        type: "Studio",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600",
        description: "Compact and modern studio perfect for singles or young professionals."
    },
    {
        id: 4,
        title: "Family House – 3 Bedrooms",
        location: "Galle, Southern Province",
        rent: "Rs. 45,000/month",
        type: "Single House",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
        description: "Quiet neighborhood family home with garden and parking space."
    },
    {
        id: 5,
        title: "Boarding Room – Male/Female",
        location: "Dehiwala, Colombo",
        rent: "Rs. 12,000/month",
        type: "Boarding Room",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600",
        description: "Affordable boarding room with meals, Wi-Fi included, close to bus stop."
    },
    {
        id: 6,
        title: "Commercial Office Space",
        location: "Rajagiriya, Colombo",
        rent: "Rs. 120,000/month",
        type: "Commercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
        description: "Open-plan office space, 2,000 sqft, AC, high-speed internet ready."
    },
    {
        id: 7,
        title: "Penthouse Apartment",
        location: "Colombo 07",
        rent: "Rs. 180,000/month",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600",
        description: "Top-floor penthouse with panoramic city views and rooftop terrace."
    },
    {
        id: 8,
        title: "Seaside Cottage",
        location: "Negombo Beach",
        rent: "Rs. 55,000/month",
        type: "Single House",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600",
        description: "Charming 2-bedroom beachside cottage, peaceful and fully furnished."
    }
];

const Listings = () => {
    return (
        <section id="properties" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Featured Properties
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                        Find Your Next Home
                    </h2>
                    <p className="text-lg text-gray-600">
                        Browse our handpicked selection of top-rated properties available for rent across Sri Lanka.
                    </p>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <button className="bg-navy hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 shadow-md">
                        Explore All Listings
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Listings;
