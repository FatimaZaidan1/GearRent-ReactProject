import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // Expecting payload to contain { name, email }
      const { name, email } = action.payload;
      const user = { name, email };
      state.user = user;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    register: (state, action) => {
      // Expecting payload to contain { name, email }
      const { name, email } = action.payload;
      const newUser = { name, email };
      state.user = newUser;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(newUser));
    },
    updateUser: (state, action) => {
      // Optional: to update user info later
      const updatedUser = { ...state.user, ...action.payload };
      state.user = updatedUser;
      localStorage.setItem("user", JSON.stringify(updatedUser));
    },
  },
});

export const { login, logout, register, updateUser } = authSlice.actions;
export default authSlice.reducer;
