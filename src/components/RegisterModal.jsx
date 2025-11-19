import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';

const RegisterModal = ({ showRegister, setShowRegister, setShowLogin }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!showRegister) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      // Save user in Redux and localStorage
      dispatch(register({ name, email }));

      // Close register modal
      setShowRegister(false);

      // Open login modal automatically
      setShowLogin(true);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setShowRegister(false)}
      ></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md z-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create New Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <button
            type="button"
            onClick={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
            className="text-orange-600 hover:text-orange-800 font-semibold ml-1"
          >
            Login here
          </button>
        </p>

        <button
          type="button"
          onClick={() => setShowRegister(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
      </div>
    </>
  );
};

export default RegisterModal;
