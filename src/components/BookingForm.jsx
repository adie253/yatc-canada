import React, { useState } from 'react';
import fleetData from '../data/fleet.json';

const STEPS = ['Select City', 'Select Yacht', 'Details', 'Review'];
const FX_RATE_USD_TO_CAD = 1.35;

import { addBooking } from '../utils/storage';

export default function BookingForm({ isOpen, onClose, preselectedCity, preselectedBoat, currency }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        city: preselectedCity || 'miami',
        yachtId: preselectedBoat?.id || '',
        date: '',
        time: '',
        guests: 1,
        name: '',
        email: '',
        notes: '',
        currency: currency || 'USD'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Update formData when props change (if needed)
    React.useEffect(() => {
        if (preselectedCity) setFormData(d => ({ ...d, city: preselectedCity }));
        if (preselectedBoat) setFormData(d => ({ ...d, yachtId: preselectedBoat.id }));
    }, [preselectedCity, preselectedBoat]);

    if (!isOpen) return null;

    const handleNext = () => {
        // Basic validation
        if (step === 1 && !formData.city) return alert('Please select a city');
        if (step === 2 && !formData.yachtId) return alert('Please select a yacht');
        if (step === 3 && (!formData.date || !formData.name)) return alert('Please fill in required details');
        setStep(s => s + 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call and save to local storage
        try {
            addBooking(formData);
            await new Promise(resolve => setTimeout(resolve, 1500)); // Keep the delay for UX
            setSuccess(true);
        } catch (error) {
            console.error(error);
            alert("Failed to submit booking");
        }
        setIsSubmitting(false);
    };

    const stepsContent = {
        1: (
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Select City</label>
                <div className="grid grid-cols-2 gap-4">
                    {['miami', 'nyc', 'vancouver', 'toronto'].map(city => (
                        <button
                            key={city}
                            onClick={() => setFormData({ ...formData, city })}
                            className={`p-4 border rounded-lg capitalize ${formData.city === city ? 'border-navy bg-navy/5 ring-1 ring-navy' : 'border-gray-200 hover:border-navy/50'}`}
                        >
                            {city}
                        </button>
                    ))}
                </div>
            </div>
        ),
        2: (
            <div className="space-y-4 max-h-60 overflow-y-auto">
                <label className="block text-sm font-medium text-gray-700">Select Yacht</label>
                {fleetData.map(boat => (
                    <div
                        key={boat.id}
                        onClick={() => setFormData({ ...formData, yachtId: boat.id })}
                        className={`p-3 border rounded-lg flex items-center cursor-pointer ${formData.yachtId === boat.id ? 'border-navy bg-navy/5' : 'hover:bg-gray-50'}`}
                    >
                        <img src={boat.image} className="w-12 h-12 rounded object-cover mr-4" alt="" />
                        <div>
                            <p className="font-bold text-navy">{boat.name}</p>
                            <p className="text-xs text-gray-500">{boat.type} • Up to {boat.capacity} guests</p>
                        </div>
                    </div>
                ))}
            </div>
        ),
        3: (
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase">Date</label>
                        <input type="date" className="w-full mt-1 p-2 border rounded" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase">Time</label>
                        <input type="time" className="w-full mt-1 p-2 border rounded" value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase">Guests</label>
                    <input type="number" min="1" max="20" className="w-full mt-1 p-2 border rounded" value={formData.guests} onChange={e => setFormData({ ...formData, guests: parseInt(e.target.value) })} />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase">Full Name</label>
                    <input type="text" className="w-full mt-1 p-2 border rounded" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase">Email</label>
                    <input type="email" className="w-full mt-1 p-2 border rounded" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase">Preferred Currency</label>
                    <select
                        className="w-full mt-1 p-2 border rounded bg-white"
                        value={formData.currency}
                        onChange={e => setFormData({ ...formData, currency: e.target.value })}
                    >
                        <option value="USD">USD ($)</option>
                        <option value="CAD">CAD (C$)</option>
                    </select>
                </div>
            </div>
        ),
        4: (
            <div className="space-y-4 bg-gray-50 p-4 rounded text-sm">
                <h3 className="font-bold text-navy border-b pb-2">Booking Summary</h3>
                <div className="grid grid-cols-2 gap-2">
                    <span className="text-gray-500">City:</span> <span className="font-medium capitalize">{formData.city}</span>
                    <span className="text-gray-500">Yacht:</span> <span className="font-medium">{fleetData.find(f => f.id === formData.yachtId)?.name}</span>
                    <span className="text-gray-500">Date:</span> <span className="font-medium">{formData.date} at {formData.time}</span>
                    <span className="text-gray-500">Guests:</span> <span className="font-medium">{formData.guests}</span>
                    <span className="text-gray-500">Contact:</span> <span className="font-medium">{formData.name}</span>

                    <span className="text-gray-500 mt-2 font-bold">Est. Total:</span>
                    <span className="font-bold text-navy mt-2 border-t pt-1">
                        {(() => {
                            const boat = fleetData.find(f => f.id === formData.yachtId);
                            if (!boat) return '-';
                            const selectedCurrency = formData.currency;
                            const price = selectedCurrency === 'USD' ? boat.price_usd : Math.round(boat.price_usd * FX_RATE_USD_TO_CAD);
                            return `${selectedCurrency === 'USD' ? '$' : 'C$'}${price.toLocaleString()}`;
                        })()}
                        <span className="text-xs font-normal text-gray-400"> /day</span>
                    </span>
                </div>
                <p className="text-xs text-gray-400 mt-4 text-center">
                    By clicking "Confirm Request", you agree to our terms. No payment is taken yet.
                </p>
            </div>
        )
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
                {success ? (
                    <div className="p-12 text-center">
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="text-2xl font-serif font-bold text-navy mb-2">Request Received!</h3>
                        <p className="text-gray-600 mb-6">Our concierge will contact you shortly to finalize your charter.</p>
                        <button onClick={onClose} className="w-full py-3 bg-navy text-white rounded font-bold">Close</button>
                    </div>
                ) : (
                    <>
                        <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
                            <h2 className="font-serif font-bold text-lg text-navy">Plan Your Charter</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-navy">✕</button>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex h-1 bg-gray-100">
                            <div className="bg-gold h-full transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
                        </div>

                        <div className="p-6">
                            {stepsContent[step]}
                        </div>

                        <div className="p-6 border-t bg-gray-50 flex justify-between">
                            {step > 1 && (
                                <button
                                    onClick={() => setStep(s => s - 1)}
                                    className="px-4 py-2 text-gray-500 hover:text-navy font-medium"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={step === 4 ? handleSubmit : handleNext}
                                disabled={isSubmitting}
                                className={`ml-auto px-6 py-2 bg-navy text-white rounded font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Processing...' : step === 4 ? 'Confirm Request' : 'Next'}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
