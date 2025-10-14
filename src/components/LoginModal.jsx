import React, { useState } from 'react';
import RegisterModal from './RegisterModal.jsx'; 

const LoginModal = ({ showLogin, setShowLogin }) => {
    // State to handle showing the Register modal if the user clicks the "Create an account" link
    const [showRegister, setShowRegister] = useState(false);

    // If showLogin prop is false, do not render the modal
    if (!showLogin) return null;

    // Handler to close login and open register
    const handleOpenRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    return (
        <>
            {/* Modal Backdrop (fixed position, full screen) */}
            <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40" 
                onClick={() => setShowLogin(false)}
            ></div>

            {/* Modal Content container (centered on screen) */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md z-50">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h2>
                
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-orange-500 focus:border-orange-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
                    >
                        Login
                    </button>
                </form>

                {/* Switch to Register link */}
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

                {/* Close Button */}
                <button 
                    type="button"
                    onClick={() => setShowLogin(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
                >
                    &times;
                </button>
            </div>

            {/* Render Register Modal for seamless switching */}
            <RegisterModal showRegister={showRegister} setShowRegister={setShowRegister} setShowLogin={setShowLogin} />
        </>
    );
};

export default LoginModal;
