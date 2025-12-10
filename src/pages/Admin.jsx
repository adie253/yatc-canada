import React, { useState, useEffect } from 'react';
import { getBookings, updateBookingStatus } from '../utils/storage';
import { motion } from 'framer-motion';

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [bookings, setBookings] = useState([]);
    const [view, setView] = useState('list'); // 'list' or 'calendar'

    useEffect(() => {
        if (isAuthenticated) {
            setBookings(getBookings().reverse()); // Show newest first
        }
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') { // Simple demo password
            setIsAuthenticated(true);
        } else {
            alert('Invalid Password');
        }
    };

    const handleStatusUpdate = (id, status) => {
        if (updateBookingStatus(id, status)) {
            setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-navy mb-6 text-center">Admin Access</h2>
                    <input
                        type="password"
                        placeholder="Enter Application Password"
                        className="w-full p-3 border rounded mb-4"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="w-full bg-navy text-white py-3 rounded font-bold hover:bg-navy/90">
                        Login
                    </button>
                    <p className="text-center text-gray-400 text-xs mt-4">Hint: admin123</p>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-navy">Dashboard</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setView('list')}
                            className={`px-4 py-2 rounded ${view === 'list' ? 'bg-navy text-white' : 'bg-white text-navy'}`}
                        >
                            List View
                        </button>
                        <button
                            onClick={() => setView('calendar')}
                            className={`px-4 py-2 rounded ${view === 'calendar' ? 'bg-navy text-white' : 'bg-white text-navy'}`}
                        >
                            Calendar View
                        </button>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="px-4 py-2 text-red-500 hover:bg-red-50 rounded"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {view === 'list' ? (
                    <div className="bg-white rounded-xl shadow overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                                <tr>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Customer</th>
                                    <th className="p-4">Details</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {bookings.map(booking => (
                                    <tr key={booking.id} className="hover:bg-gray-50">
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase
                                                ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                                    booking.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`
                                            }>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-bold text-navy">{booking.name}</p>
                                            <p className="text-sm text-gray-500">{booking.email}</p>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-sm"><span className="font-bold">Guests:</span> {booking.guests}</p>
                                            <p className="text-sm capitalize"><span className="font-bold">City:</span> {booking.city}</p>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-medium">{booking.date}</p>
                                            <p className="text-xs text-gray-500">{booking.time}</p>
                                        </td>
                                        <td className="p-4 text-right space-x-2">
                                            {booking.status === 'pending' && (
                                                <>
                                                    <button
                                                        onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                                                        className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                                                    >
                                                        Accept
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusUpdate(booking.id, 'rejected')}
                                                        className="px-3 py-1 bg-red-400 text-white rounded text-sm hover:bg-red-500"
                                                    >
                                                        Reject
                                                    </button>
                                                </>
                                            )}
                                            {booking.status !== 'pending' && (
                                                <span className="text-gray-400 text-sm italic">Processed</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {bookings.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="p-8 text-center text-gray-400">No bookings found yet.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-white p-8 rounded-xl shadow">
                        <h3 className="text-lg font-bold mb-4">Booking Calendar</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Simple visualization of booked dates */}
                            {bookings.filter(b => b.status === 'confirmed').map(booking => (
                                <div key={booking.id} className="p-4 border border-green-200 bg-green-50 rounded">
                                    <p className="font-bold text-green-800">{booking.date}</p>
                                    <p className="text-sm">{booking.time} - {booking.name}</p>
                                    <p className="text-xs text-gray-500 capitalize">{booking.city}</p>
                                </div>
                            ))}
                            {bookings.filter(b => b.status === 'confirmed').length === 0 && (
                                <p className="text-gray-400">No confirmed bookings to display on calendar.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
