export const STORAGE_KEY = 'yacht_bookings';

export const getBookings = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error reading bookings", error);
        return [];
    }
};

export const addBooking = (booking) => {
    const bookings = getBookings();
    const newBooking = {
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString(),
        status: 'pending', // pending, confirmed, rejected
        ...booking
    };
    bookings.push(newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
};

export const updateBookingStatus = (id, status) => {
    const bookings = getBookings();
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
        bookings[index].status = status;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
        return true;
    }
    return false;
};
