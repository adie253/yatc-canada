import React, { useEffect, useState } from 'react';
import miamiImg from '../assets/miami.png';
import nycImg from '../assets/nyc.png';
import vancouverImg from '../assets/vancouver.png';
import torontoImg from '../assets/toronto.png';

const CITY_IMAGES = {
    miami: miamiImg,
    nyc: nycImg,
    vancouver: vancouverImg,
    toronto: torontoImg
};

const CITIES = [
    { id: 'miami', label: 'Miami' },
    { id: 'nyc', label: 'New York City' },
    { id: 'vancouver', label: 'Vancouver' },
    { id: 'toronto', label: 'Toronto' }
];

export default function Hero({ currentCity, setCity }) {
    const [bgImage, setBgImage] = useState(CITY_IMAGES[currentCity]);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        setFading(true);
        const timer = setTimeout(() => {
            setBgImage(CITY_IMAGES[currentCity]);
            setFading(false);
        }, 200); // 200ms fade out before switch for smoothness
        return () => clearTimeout(timer);
    }, [currentCity]);

    return (
        <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background with Fade Transition */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${fading ? 'opacity-80' : 'opacity-100'}`}
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                    Private Yacht Charters in <br />
                    <span className="text-gold italic">{CITIES.find(c => c.id === currentCity)?.label}</span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
                    Experience the ultimate luxury on water. Bespoke itineraries, premium service, and unforgettable views.
                </p>

                {/* City Selector Pills */}
                <div className="inline-flex max-w-full overflow-x-auto bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-2xl scrollbar-hide">
                    {CITIES.map((city) => (
                        <button
                            key={city.id}
                            onClick={() => setCity(city.id)}
                            className={`px-4 md:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${currentCity === city.id
                                ? 'bg-white text-navy shadow-md transform scale-105'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {city.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
