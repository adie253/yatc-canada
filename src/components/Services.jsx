import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, Calendar, GlassWater } from 'lucide-react';

const services = [
    {
        icon: <Anchor className="w-8 h-8 text-gold" />,
        title: "Day Charters",
        description: "Experience the ultimate freedom with our full-day yacht rentals. Perfect for exploring coastal gems."
    },
    {
        icon: <Calendar className="w-8 h-8 text-gold" />,
        title: "Events & Parties",
        description: "Host unforgettable celebrations on the water. From birthdays to corporate mixers, we handle it all."
    },
    {
        icon: <Compass className="w-8 h-8 text-gold" />,
        title: "Sunset Cruises",
        description: "Watch the sun dip below the horizon with a glass of champagne in hand. The perfect romantic getaway."
    },
    {
        icon: <GlassWater className="w-8 h-8 text-gold" />,
        title: "Catering Services",
        description: "Premium on-board dining experiences with private chefs and custom menus tailored to your taste."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-serif font-bold text-navy mb-4"
                    >
                        Premium Services
                    </motion.h2>
                    <div className="h-1 w-24 bg-gold mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        Beyond just a vessel, we provide a complete luxury experience tailored to your desires.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-slate-50 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
                        >
                            <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
