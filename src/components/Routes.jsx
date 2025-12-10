import React from 'react';
import routesData from '../data/routes.json';

export default function Routes({ currentCity }) {
    const cityData = routesData[currentCity];

    if (!cityData) return null;

    return (
        <div className={`relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br ${cityData.bg_color} text-white`}>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <h3 className="text-sm font-bold tracking-widest uppercase text-gold mb-2">Destination Highlight</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{cityData.name} Routes</h2>
                    <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8">
                        {cityData.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {cityData.highlights.map((highlight, index) => (
                            <span key={index} className="px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium">
                                {highlight}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <h4 className="text-gold font-serif font-bold mb-4 border-b border-white/10 pb-2">Sample Itinerary</h4>
                    <ul className="space-y-4">
                        {cityData.itinerary && cityData.itinerary.map((item, i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <span className="text-xs font-mono opacity-60 pt-1 min-w-[60px]">{item.time}</span>
                                <span className="text-sm font-medium">{item.activity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
