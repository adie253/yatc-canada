import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, currency, setCurrency, onBookNow }) {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-navy">
            <Header currency={currency} setCurrency={setCurrency} onBookNow={onBookNow} />
            <main className="flex-grow pt-20">
                {/* Horizontal padding wrapper */}
                <div className="w-full">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
