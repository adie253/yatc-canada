import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Sarah Jenkins",
        location: "Miami",
        text: "The absolute best experience of our summer. The crew was impeccable and the yacht was pristine.",
        rating: 5
    },
    {
        name: "Michael Chen",
        location: "Vancouver",
        text: "seamless booking process and top-tier service. Highly recommended for corporate events.",
        rating: 5
    },
    {
        name: "Emma Thompson",
        location: "Toronto",
        text: "A magical sunset cruise. Every detail was taken care of. Will definitely book again.",
        rating: 5
    }
];

export default function Reviews() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 text-navy relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">Client Experiences</h2>
                    <div className="flex justify-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-gold text-gold w-6 h-6" />)}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-slate-100"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                                ))}
                            </div>
                            <p className="text-lg italic mb-6 text-gray-600">"{review.text}"</p>
                            <div>
                                <h4 className="font-bold text-navy">{review.name}</h4>
                                <p className="text-sm text-gray-400">{review.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
