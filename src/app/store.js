import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import inventoryReducer from '../features/inventory/inventorySlice';
import bookingsReducer from '../features/bookings/bookingsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    inventory: inventoryReducer,
    bookings: bookingsReducer,
  },
});

export default store;