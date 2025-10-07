import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import React from 'react';

const Navbar = () => {
  // Link style for active/inactive states
  const LinkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-transparent hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
   <nav
  className="border-b"
  style={{ backgroundColor: '#F59B3F', borderBottomColor: '#D95700' }} // Navbar color matched to logo background
>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">

            {/* Logo */}
            <NavLink className="flex flex-shrink-0 items-center mr-6" to="/">
              <img
                className="h-20 w-auto bg-transparent" // Increased logo size (h-12)
                src={logo}
                alt="Camera Rental"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Camera Rental
              </span>
            </NavLink>

            {/* Links */}
            <div className="flex-1">
              <div className="flex space-x-4 justify-end">
                <NavLink to="/" className={LinkClass}>
                  Home
                </NavLink>

                <NavLink to="/cameras" className={LinkClass}> {/* Updated Route */}
                  Cameras
                </NavLink>

                <NavLink to="/my-bookings" className={LinkClass}> {/* Updated Route */}
                  My Bookings
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;