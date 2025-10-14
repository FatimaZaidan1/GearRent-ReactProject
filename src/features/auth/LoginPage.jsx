import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Custom hook to access auth state and actions
  const { isAuthenticated, staffLogin } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Attempt to log in using the custom hook
    const success = staffLogin(username, password);

    if (success) {
      // The useEffect above will handle the navigation upon success
    } else {
      setError('Invalid username or password. Use "admin" for both.');
    }
  };

  if (isAuthenticated) {
    // Show a loading/redirect message briefly if already logged in but not redirected yet
    return (
        <div className="flex justify-center items-center h-[70vh] bg-gray-50">
            <p className="text-xl text-gray-600">Redirecting to Dashboard...</p>
        </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Staff Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username (admin)
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150"
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password (admin)
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
