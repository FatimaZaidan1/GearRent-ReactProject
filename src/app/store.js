// store.js (Updated)

import { configureStore } from '@reduxjs/toolkit';
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'; // Import necessary tools
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authReducer from '../features/auth/authSlice';
import bookingReducer from '../features/bookings/bookingSlice';

// 1. Configuration for Redux Persist
const persistConfig = {
    key: 'root', // Key for the localStorage object
    storage,
    whitelist: ['bookings'], // ONLY persist the 'bookings' slice
    // We could also 'blacklist' the 'auth' slice if it handles sensitive/temporary tokens
};

// 2. Wrap the bookingsReducer with persistReducer
const persistedBookingReducer = persistReducer(persistConfig, bookingReducer);

// 3. Configure the Redux store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        bookings: persistedBookingReducer, // Use the persisted reducer here
    },
    // Add middleware configuration to handle non-serializable actions from redux-persist
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// 4. Create a persistor object
export const persistor = persistStore(store);

