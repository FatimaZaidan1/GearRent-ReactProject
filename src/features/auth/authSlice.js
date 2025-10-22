import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null, // Stores user info if logged in (null if logged out)
        token: null, // Stores a token (null if logged out)
        isAuthenticated: false, // Flag derived from token/user status
    },
    reducers: {
        login: (state, action) => {
            // Mock login logic: Set token and user (e.g., admin)
            state.user = { id: 'admin', username: 'Admin Staff' };
            state.token = 'mock-auth-token';
            state.isAuthenticated = true;
        },
        logout: (state) => {
            // Clear all auth state
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

// Selector: Selects the authentication status (used by ProtectedRoute and useAuth)
const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

// Selector: Selects the user ID (This is the new selector we are adding)
const selectUserId = (state) => state.auth.user ? state.auth.user.id : null;

// Action exports
export const { login, logout } = authSlice.actions;

// Selector exports
export { selectIsAuthenticated, selectUserId };

// Default export for the reducer
export default authSlice.reducer;
