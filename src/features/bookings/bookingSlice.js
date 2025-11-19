// bookingsSlice.js (Updated)

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // We remove the sample booking. It should start empty.
  bookings: [], // <-- CHANGED: Initial state is now an empty array.
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      // Ensure the booking payload includes a unique bookingId
      state.bookings.push({
        ...action.payload,
        bookingId: `book-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      });
    },
    
    // Reducer to delete a booking by its unique bookingId
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.bookingId !== action.payload
      );
    },

    // Reducer to update the dates and recalculate the price
    updateBooking: (state, action) => {
      const { bookingId, newPickupDate, newReturnDate, newTotalPrice } = action.payload;
      const index = state.bookings.findIndex((b) => b.bookingId === bookingId);
      
      if (index !== -1) {
        state.bookings[index].pickupDate = newPickupDate;
        state.bookings[index].returnDate = newReturnDate;
        state.bookings[index].totalPrice = newTotalPrice;
        // Optionally update status to 'Modified'
        state.bookings[index].status = 'Modified';
      }
    },
  },
});

export const { addBooking, deleteBooking, updateBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;