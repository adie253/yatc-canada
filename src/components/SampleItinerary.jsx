import React from 'react';

const itineraryItems = [
    { time: "10:00 AM", title: "Welcome Aboard", desc: "Champagne reception and safety briefing by your captain." },
    { time: "11:30 AM", title: "Cruise to Secluded Bay", desc: "Enjoy the scenic views as we head to our first anchor point." },
    { time: "01:00 PM", title: "Gourmet Lunch", desc: "Al fresco dining prepared by your private chef." },
    { time: "02:30 PM", title: "Water Activities", desc: "Swimming, snorkeling, or jet skiing in crystal clear waters." },
    { time: "05:00 PM", title: "Sunset Return", desc: "Cruise back to the marina with cocktails as the sun sets." }
];

export default function SampleItinerary() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-navy mb-4">A Perfect Day at Sea</h2>
                    <p className="text-gray-500">Sample Full-Day Charter Itinerary</p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {itineraryItems.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-3 h-3 bg-gold rounded-full"></div>
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-navy">{item.title}</h3>
                                    <span className="text-xs font-mono text-gold font-bold bg-navy/5 px-2 py-1 rounded">{item.time}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
