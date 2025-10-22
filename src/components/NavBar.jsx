import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LoginModal from './LoginModal.jsx';
import RegisterModal from './RegisterModal.jsx';
import searchIcon from '../assets/Search-icon.jpg'; // keep correct path and filename

// Logo Component
const Logo = () => (
  <NavLink
    to="/"
    className="flex items-center space-x-2 p-2 rounded-lg bg-[#FF8C00] transition duration-300 shadow-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
    <span className="text-white text-lg font-bold tracking-wider">
      Camera Rental
    </span>
  </NavLink>
);

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const isAuthenticated = false; // Replace with real auth state later

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? 'text-[#FF8C00] font-bold text-lg transition duration-150 border-b-2 border-[#FF8C00]'
      : 'text-gray-800 hover:text-[#FF8C00] text-lg transition duration-150';

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Section: Logo */}
            <Logo />

            {/* Center Section: Navigation Links (Desktop Only) */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/cameras" className={navLinkClasses}>
                Cameras
              </NavLink>
              <NavLink to="/my-bookings" className={navLinkClasses}>
                My Bookings
              </NavLink>

              {/* Search Field */}
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <div className="flex items-center border border-gray-300 rounded-lg py-1 px-3 bg-gray-50 focus-within:border-[#FF8C00] transition duration-150">
                  <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="w-5 h-5 object-contain mr-2"
                  />
                  <input
                    type="text"
                    placeholder="Search cameras..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-transparent focus:outline-none text-gray-800 text-base w-48"
                  />
                </div>
              </form>

              {isAuthenticated && (
                <NavLink to="/dashboard" className={navLinkClasses}>
                  Dashboard
                </NavLink>
              )}
            </div>

            {/* Right Section: Auth/User Buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              {!isAuthenticated ? (
                <>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-gray-800 hover:text-[#FF8C00] font-medium transition duration-150"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="bg-[#FF8C00] text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold shadow-md"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 font-semibold shadow-md">
                  Logout
                </button>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-800 hover:text-[#FF8C00] focus:outline-none"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={navLinkClasses}
              >
                Home
              </NavLink>
              <NavLink
                to="/cameras"
                onClick={() => setMobileMenuOpen(false)}
                className={navLinkClasses}
              >
                Cameras
              </NavLink>
              <NavLink
                to="/my-bookings"
                onClick={() => setMobileMenuOpen(false)}
                className={navLinkClasses}
              >
                My Bookings
              </NavLink>

              {isAuthenticated && (
                <NavLink
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className={navLinkClasses}
                >
                  Dashboard
                </NavLink>
              )}

              {/* Auth Buttons (Mobile) */}
              {!isAuthenticated ? (
                <>
                  <button
                    onClick={() => {
                      setShowLogin(true);
                      setMobileMenuOpen(false);
                    }}
                    className="text-gray-800 hover:text-[#FF8C00] font-medium transition duration-150 text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setShowRegister(true);
                      setMobileMenuOpen(false);
                    }}
                    className="bg-[#FF8C00] text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold shadow-md text-left"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 font-semibold shadow-md text-left"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Modals */}
      <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} />
      <RegisterModal
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        setShowLogin={setShowLogin}
      />
    </>
  );
};

export default Navbar;
