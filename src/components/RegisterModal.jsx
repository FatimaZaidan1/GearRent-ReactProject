import React from 'react';

const RegisterModal = ({ showRegister, setShowRegister, setShowLogin }) => {
    // If showRegister prop is false, do not render the modal
    if (!showRegister) return null;

    const handleOpenLogin = () => {
        // Close register modal and open login modal
        setShowRegister(false);
        setShowLogin(true); 
    };

    return (
        <>
            {/* Modal Backdrop */}
            <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40" 
                onClick={() => setShowRegister(false)}
            ></div>

            {/* Modal Content */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md z-50">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create New Account</h2>
                
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-orange-500 focus:border-orange-500"
                    />
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
                        className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account? 
                    <button 
                        type="button"
                        onClick={handleOpenLogin}
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
