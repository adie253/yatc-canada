import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-navy pt-16 pb-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-serif font-bold mb-6">YACHT<span className="text-gold">PRIME</span></h2>
                    <p className="text-gray-600 max-w-sm mb-6">
                        The premier luxury yacht charter service for discerning travelers.
                        Experience Miami, NYC, Vancouver, and Toronto from a new perspective.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors text-navy">📷</a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors text-navy">🐦</a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors text-navy">📘</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-navy uppercase tracking-widest text-sm mb-6">Explore</h3>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="#" className="hover:text-gold transition-colors">Our Fleet</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Destinations</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Suggested Itineraries</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Concierge Services</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-navy uppercase tracking-widest text-sm mb-6">Legal</h3>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Cancellation Policy</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Insurance Info</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 max-w-7xl mx-auto px-6 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2025 YachtPrime Charters. All rights reserved.</p>
                <p className="mt-2 text-xs opacity-50">Images generated for demonstration purposes.</p>
            </div>
        </footer>
    );
}
