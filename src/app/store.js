import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import bookingReducer from '../features/bookings/bookingSlice'; // Import the new booking reducer

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    bookings: bookingReducer, // Add the bookings slice to the store
    // cameras: cameraReducer, // Future feature for camera data management
  },
  // DevTools are enabled by default
});
