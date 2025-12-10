import React from 'react';

export default function BoatCard({ boat, currency, rate, onBook }) {

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-navy uppercase tracking-wider">
                    {boat.type}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-navy mb-2">{boat.name}</h3>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center"><span className="text-gold mr-1">👥</span> {boat.capacity} Guests</span>
                    <span className="flex items-center"><span className="text-gold mr-1">⚓</span> {boat.length}</span>
                    <span className="flex items-center"><span className="text-gold mr-1">⚡</span> {boat.speed}</span>
                </div>

                <ul className="flex flex-wrap gap-2 mb-6">
                    {boat.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100">
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-400 font-medium">Starting from</p>
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-navy">
                                ${boat.price_usd.toLocaleString()} <span className="text-xs font-normal text-gray-400">USD</span>
                            </p>
                            <p className="text-sm font-semibold text-gold">
                                C${Math.round(boat.price_usd * rate).toLocaleString()} <span className="text-xs font-normal text-gold/80">CAD</span>
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => onBook(boat)}
                        className="text-navy font-semibold text-sm hover:text-gold transition-colors flex items-center group/btn"
                    >
                        Book Now <span className="ml-1 transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                </div>
            </div>

            {/* Chrome border effect on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 pointer-events-none rounded-xl mix-blend-overlay"></div>
        </div>
    );
}
