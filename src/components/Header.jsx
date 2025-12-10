import React, { useState, useEffect } from 'react';

export default function Header({ currency, setCurrency, onBookNow }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-serif font-bold tracking-tighter z-50 text-black">
                    YACHT<span className="text-gold">PRIME</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 font-medium text-slate-800">
                    <a href="#fleet" className="hover:text-gold transition-colors">Our Fleet</a>
                    <a href="#destinations" className="hover:text-gold transition-colors">Destinations</a>
                    <a href="#about" className="hover:text-gold transition-colors">About</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={`w-6 h-0.5 mb-1.5 transition-all bg-black ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 mb-1.5 transition-all bg-black ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 transition-all bg-black ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Actions (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center rounded-full border p-0.5 border-slate-200 bg-slate-50">
                        <button
                            onClick={() => setCurrency('USD')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${currency === 'USD'
                                ? 'bg-black text-white shadow-sm'
                                : 'text-slate-500 hover:text-black'}`}
                        >
                            USD
                        </button>
                        <button
                            onClick={() => setCurrency('CAD')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${currency === 'CAD'
                                ? 'bg-black text-white shadow-sm'
                                : 'text-slate-500 hover:text-black'}`}
                        >
                            CAD
                        </button>
                    </div>

                    <button
                        onClick={onBookNow}
                        className="bg-gold hover:bg-gold-dark text-white px-6 py-2.5 rounded-sm font-semibold shadow-lg hover:shadow-gold/50 transition-all transform hover:-translate-y-0.5"
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center space-y-6 text-xl font-serif text-black">
                    <a href="#fleet" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">Our Fleet</a>
                    <a href="#destinations" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">Destinations</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">About</a>
                </nav>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => { setCurrency('USD'); setIsMenuOpen(false); }}
                        className={`px-4 py-2 rounded-full font-bold ${currency === 'USD' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}
                    >
                        USD
                    </button>
                    <button
                        onClick={() => { setCurrency('CAD'); setIsMenuOpen(false); }}
                        className={`px-4 py-2 rounded-full font-bold ${currency === 'CAD' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}
                    >
                        CAD
                    </button>
                </div>

                <button
                    onClick={() => { onBookNow(); setIsMenuOpen(false); }}
                    className="bg-gold text-white px-8 py-3 rounded text-lg font-bold shadow-xl"
                >
                    Book Your Trip
                </button>
            </div>
        </header>
    );
}
