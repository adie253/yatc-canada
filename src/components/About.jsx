import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1569263979104-d336814bb9dc?auto=format&fit=crop&q=80&w=1000"
                            alt="Yacht Lifestyle"
                            className="rounded-2xl shadow-2xl relative z-10"
                        />
                        <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-gold rounded-2xl z-0 hidden md:block"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <h4 className="text-gold font-bold uppercase tracking-widest mb-2">Our Story</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Definitions of Luxury on Water</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Founded in 2024, YachtPrime was born from a passion for the ocean and a desire to bring the world's most exclusive nautical experiences to discerning travelers. We don't just rent yachts; we curate memories.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        With a presence in Miami, NYC, Vancouver, and Toronto, our fleet represents the pinnacle of marine engineering and comfort. Each voyage is governed by our commitment to safety, discretion, and unparalleled service.
                    </p>

                    <button className="text-navy font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                        Read More About Us
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
