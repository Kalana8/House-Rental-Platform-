import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        propertyName: '',
        budget: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, propertyName, budget, date } = formData;

        // Basic validation handled by 'required' attributes on inputs
        if (name && propertyName && budget && date) {
            const message = `Hi, I'm ${name}. I'm interested in renting ${propertyName}. My budget is ${budget} and I would like to move in on ${date}. Please share more details.`;
            const whatsappURL = `https://wa.me/94771234567?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Get in Touch
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                        Contact Us
                    </h2>
                    <p className="text-lg text-gray-600">
                        Have a question or want to inquire about a property? Reach out to us directly.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 mb-16">

                    {/* Left Column: Contact Details */}
                    <div className="w-full lg:w-1/3">
                        <h3 className="font-serif text-2xl font-bold text-navy mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy mr-4 flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy mb-1">Office Address</h4>
                                    <p className="text-gray-600">No. 45, Galle Road,<br />Colombo 03, Sri Lanka</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy mr-4 flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy mb-1">Email Address</h4>
                                    <p className="text-gray-600">info@nestfinder.lk</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy mr-4 flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy mb-1">Phone Number</h4>
                                    <p className="text-gray-600">+94 77 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Google Map */}
                    <div className="w-full lg:w-2/3">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58007651159!2d79.7861863!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1699000000000!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Maps Location"
                            />
                        </div>
                    </div>
                </div>

                {/* Full Width: WhatsApp Form */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner border border-gray-100">
                    <div className="text-center mb-10">
                        <h3 className="font-serif text-3xl font-bold text-navy mb-4">Send a Rental Inquiry via WhatsApp</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Fill out the details below and we'll prepare a tailored WhatsApp message to get the conversation started immediately.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                                    placeholder="e.g. John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700 mb-2">Property Name/ID</label>
                                <input
                                    type="text"
                                    id="propertyName"
                                    name="propertyName"
                                    value={formData.propertyName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                                    placeholder="e.g. Modern 2-Bedroom Apartment"
                                />
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Your Budget</label>
                                <input
                                    type="text"
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                                    placeholder="e.g. Rs. 50,000"
                                />
                            </div>

                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Move-in Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                                />
                            </div>

                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1"
                            >
                                Send via WhatsApp 💬
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
