import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal.jsx';
import RegisterModal from './RegisterModal.jsx';

// Inline SVG Logo using the brand color scheme (White text/icon on Orange background)
const Logo = () => (
    <NavLink to="/" className="flex items-center space-x-2 p-2 rounded-lg bg-[#FF8C00] transition duration-300 shadow-md">
        {/* Camera Icon - Using a simple, bold SVG representation */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
            <circle cx="12" cy="13" r="3"/>
        </svg>
        <span className="text-white text-lg font-bold tracking-wider">
            Camera Rental
        </span>
    </NavLink>
);

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const isAuthenticated = false; // Placeholder: Will be replaced by actual auth state

    return (
        <>
            <nav className="bg-white shadow-lg sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Left Section: Logo */}
                        <Logo />

                        {/* Center Section: Navigation Links */}
                        <div className="hidden md:flex space-x-8">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    isActive ? 'text-[#FF8C00] font-bold text-lg transition duration-150 border-b-2 border-[#FF8C00]' : 'text-gray-800 hover:text-[#FF8C00] text-lg transition duration-150'
                                }>
                                Home
                            </NavLink>
                            <NavLink 
                                to="/cameras" 
                                className={({ isActive }) => 
                                    isActive ? 'text-[#FF8C00] font-bold text-lg transition duration-150 border-b-2 border-[#FF8C00]' : 'text-gray-800 hover:text-[#FF8C00] text-lg transition duration-150'
                                }>
                                Cameras
                            </NavLink>
                            <NavLink 
                                to="/my-bookings" 
                                className={({ isActive }) => 
                                    isActive ? 'text-[#FF8C00] font-bold text-lg transition duration-150 border-b-2 border-[#FF8C00]' : 'text-gray-800 hover:text-[#FF8C00] text-lg transition duration-150'
                                }>
                                My Bookings
                            </NavLink>
                            {isAuthenticated && (
                                <NavLink to="/dashboard" className={({ isActive }) => 
                                    isActive ? 'text-[#FF8C00] font-bold text-lg transition duration-150 border-b-2 border-[#FF8C00]' : 'text-gray-800 hover:text-[#FF8C00] text-lg transition duration-150'
                                }>
                                    Dashboard
                                </NavLink>
                            )}
                        </div>

                        {/* Right Section: Auth/User Buttons */}
                        <div className="flex items-center space-x-4">
                            {!isAuthenticated ? (
                                <>
                                    <button 
                                        onClick={() => setShowLogin(true)} 
                                        className="text-gray-800 hover:text-[#FF8C00] font-medium transition duration-150 hidden sm:block"
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
                                <button 
                                    className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 font-semibold shadow-md"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Modals */}
            <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} />
            <RegisterModal showRegister={showRegister} setShowRegister={setShowRegister} setShowLogin={setShowLogin} />
        </>
    );
};

export default Navbar;
