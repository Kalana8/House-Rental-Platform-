import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <svg
                                className="w-8 h-8 text-gold"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span className="font-serif text-2xl font-bold text-white">
                                NestFinder
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed pr-8">
                            Sri Lanka's premier house rental platform. We make finding your next home a seamless and joyful experience.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold border-b border-gray-700 pb-2 mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="hover:text-gold transition-colors block">Home</a></li>
                            <li><a href="#about" className="hover:text-gold transition-colors block">About Us</a></li>
                            <li><a href="#properties" className="hover:text-gold transition-colors block">Properties</a></li>
                            <li><a href="#features" className="hover:text-gold transition-colors block">Features</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Social */}
                    <div>
                        <h4 className="font-bold border-b border-gray-700 pb-2 mb-4 text-white">Connect With Us</h4>
                        <p className="text-sm text-gray-400 mb-6">
                            Follow us on social media for the latest property updates and nesting tips.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/94771234567"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors duration-300"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2026 NestFinder. All rights reserved.</p>
                    <p>kalana kavinda</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
