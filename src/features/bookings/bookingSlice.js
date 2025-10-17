import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
});

export const { addBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;
