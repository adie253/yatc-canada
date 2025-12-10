import React from 'react';
import { motion } from 'framer-motion';

const destinations = {
    miami: {
        title: "Miami & The Keys",
        description: "Explore the vibrant waters of Biscayne Bay, drop anchor at the famous Nixon Sandbar, or set a course for the crystal-clear waters of Key West.",
        highlights: ["Biscayne Bay", "Nixon Sandbar", "Star Island", "Key West"],
        image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&q=80&w=1000"
    },
    vancouver: {
        title: "Vancouver & Gulf Islands",
        description: "Navigate the stunning fjords of Indian Arm, spot whales in the Strait of Georgia, and discover secluded coves in the Gulf Islands.",
        highlights: ["English Bay", "Indian Arm", "Bowen Island", "Gulf Islands"],
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000"
    },
    toronto: {
        title: "Toronto & Lake Ontario",
        description: "Cruise the iconic Toronto skyline from the water, explore the Toronto Islands lagoons, or head to Niagara-on-the-Lake.",
        highlights: ["Toronto Islands", "Scarborough Bluffs", "Hanlan's Point", "Niagara"],
        image: "https://images.unsplash.com/photo-1507992781348-31026a639974?auto=format&fit=crop&q=80&w=1000"
    }
};

export default function Destinations({ currentCity }) {
    // Default to Miami if city not found, or handle gracefully
    const city = currentCity.toLowerCase();
    // Map 'nyc' to something or just don't show if not in data, simplified for this demo:
    const data = destinations[city] || destinations.miami;

    // Use a lighter theme approach
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white text-navy">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-full md:w-1/2"
                >
                    <h4 className="text-gold font-bold uppercase tracking-widest mb-2">Destinations</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">{data.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {data.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {data.highlights.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-gold"></div>
                                <span className="font-medium text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-full md:w-1/2"
                >
                    <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
