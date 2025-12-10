import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import FleetGrid from './components/FleetGrid';
import Destinations from './components/Destinations';
import SampleItinerary from './components/SampleItinerary';
import BookingForm from './components/BookingForm';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Admin from './pages/Admin';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage({ currentCity, setCity, currency, handleBook }) {
  return (
    <>
      <Hero currentCity={currentCity} setCity={setCity} />

      <section id="fleet" className="py-24 max-w-7xl mx-auto relative z-20 -mt-20">
        <div className="text-center mb-16 px-6">
          <h2 className="inline-block text-4xl font-serif font-bold text-navy mb-4 relative">
            Our Elite Fleet
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gold rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Choose from our curated selection of luxury vessels available in <span className="font-semibold text-navy capitalize">{currentCity}</span>.
          </p>
        </div>
        <div className="px-6">
          <FleetGrid currency={currency} onBook={handleBook} />
        </div>
      </section>

      <Services />

      <Destinations currentCity={currentCity} />

      <SampleItinerary />

      <Reviews />
      <About />
    </>
  );
}

function App() {
  const [currentCity, setCity] = useState('miami');
  const [currency, setCurrency] = useState('USD');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBoat, setSelectedBoat] = useState(null);

  // Fix: Use useEffect for side-effects instead of render-time state updates
  useEffect(() => {
    if (['vancouver', 'toronto'].includes(currentCity)) {
      setCurrency('CAD');
    } else {
      setCurrency('USD');
    }
  }, [currentCity]);

  const handleBook = (boat) => {
    setSelectedBoat(boat);
    setIsBookingOpen(true);
  };

  const openBooking = () => {
    setSelectedBoat(null);
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={
          <Layout currency={currency} setCurrency={setCurrency} onBookNow={openBooking}>
            <Routes>
              <Route path="/" element={
                <HomePage
                  currentCity={currentCity}
                  setCity={setCity}
                  currency={currency}
                  handleBook={handleBook}
                />
              } />
              <Route path="/services" element={<div className="pt-10"><Services /></div>} />
              <Route path="/about" element={<div className="pt-10"><About /></div>} />
            </Routes>
          </Layout>
        } />
      </Routes>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedCity={currentCity}
        preselectedBoat={selectedBoat}
        currency={currency}
      />
    </BrowserRouter>
  );
}

export default App;
