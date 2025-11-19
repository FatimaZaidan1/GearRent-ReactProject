import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import RegisterModal from './RegisterModal.jsx';

const LoginModal = ({ showLogin, setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // ✅ Success message
  const dispatch = useDispatch();
  const [showRegister, setShowRegister] = useState(false);

  if (!showLogin) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mocked login logic — accepts any email/password
    if (email && password) {
      // Try to get the user from localStorage (from signup)
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const name = storedUser?.name || ''; // fallback to empty string
      const userData = { name, email };

      dispatch(login(userData));

      // Show success message
      setSuccess('✅ Login successful');

      // Auto-close modal after a short delay (1.2s)
      setTimeout(() => {
        setShowLogin(false);
        setSuccess('');
      }, 1200);
    } else {
      setError('Please enter email and password.');
    }
  };

  const handleOpenRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setShowLogin(false)}
      ></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md z-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-orange-500 focus:border-orange-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-orange-500 focus:border-orange-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm text-center">{success}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <button
            type="button"
            onClick={handleOpenRegister}
            className="text-orange-600 hover:text-orange-800 font-semibold ml-1"
          >
            Create an account
          </button>
        </p>

        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
      </div>

      <RegisterModal
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        setShowLogin={setShowLogin}
      />
    </>
  );
};

export default LoginModal;
