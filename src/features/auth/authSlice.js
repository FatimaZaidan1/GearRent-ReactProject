import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the authentication slice.
const initialState = {
  user: null, // Null means not logged in. Will store user object on login.
  isAuthenticated: false,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Mock async function to simulate a login API call.
// In a real app, this would use fetch or an async thunk.
const mockLogin = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check for mock credentials (as requested in the project requirements)
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        resolve({ 
          id: 'owner-123', 
          username: credentials.username, 
          role: 'owner',
        });
      } else {
        reject(new Error('Invalid username or password.'));
      }
    }, 1000); // Simulate network delay
  });
};

// We will use a regular action for now, and integrate createAsyncThunk later 
// when we implement the useAuth custom hook. For simplicity, we define the login logic here.
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to handle successful mock login
    loginSuccess: (state, action) => {
      state.user = action.payload; // payload should be { id, username, role }
      state.isAuthenticated = true;
      state.status = 'succeeded';
      state.error = null;
    },
    // Action to handle logout
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = 'idle';
      state.error = null;
    },
    // Action to handle login failure
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = 'failed';
      state.error = action.payload;
    }
    // Note: We avoid async logic in reducers, but will wrap the mockLogin 
    // function in an async thunk inside a useAuth hook later.
  },
});

export const { loginSuccess, logout, loginFailure } = authSlice.actions;
export default authSlice.reducer;
