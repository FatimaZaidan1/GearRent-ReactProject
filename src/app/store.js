import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

// This is the main store configuration. 
// We include the authReducer here, and will add inventory and bookings later.
export const store = configureStore({
  reducer: {
    auth: authReducer,
    // inventory: inventoryReducer, // To be added later
    // bookings: bookingsReducer, // To be added later
  },
  // The devTools are enabled by default, which is great for debugging.
});

// We also export the RootState and AppDispatch types (for TypeScript use, 
// but good practice even in JS for clarity).
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
