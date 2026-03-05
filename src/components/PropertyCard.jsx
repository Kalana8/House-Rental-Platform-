import React from 'react';
import { MapPin } from 'lucide-react';

const PropertyCard = ({ property }) => {
    // Determine badge color based on type
    const getBadgeColor = (type) => {
        switch (type.toLowerCase()) {
            case 'apartment': return 'bg-blue-500';
            case 'luxury villa': return 'bg-gold';
            case 'studio': return 'bg-green-500';
            case 'commercial': return 'bg-purple-500';
            default: return 'bg-navy';
        }
    };

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">

            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Type Badge */}
                <div className={`absolute top-4 right-4 ${getBadgeColor(property.type)} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10`}>
                    {property.type}
                </div>

                {/* Overlay gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-bold text-navy line-clamp-1 flex-1 pr-2" title={property.title}>
                        {property.title}
                    </h3>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0 text-gold" />
                    <span className="truncate" title={property.location}>{property.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                    {property.description}
                </p>

                {/* Footer Area with Price and Button */}
                <div className="mt-auto border-t border-gray-100 pt-5">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Monthly Rent</span>
                        <span className="text-lg font-bold text-gold">{property.rent}</span>
                    </div>

                    <button className="w-full bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white font-medium py-2.5 rounded-lg transition-colors duration-300 shadow-sm">
                        View Details
                    </button>
                </div>
            </div>

        </div>
    );
};

export default PropertyCard;
