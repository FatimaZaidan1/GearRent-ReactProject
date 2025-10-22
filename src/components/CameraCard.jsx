// src/components/CameraCard.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // 👈 Import NavLink

// This component displays a single camera card
const CameraCard = ({ camera }) => {
  return (
    // 👈 Made the entire card body clickable to the details page
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer">
      <NavLink to={`/cameras/${camera.id}`} className="block">
        
        {/* Camera Image Section */}
        <div className="h-48 bg-gray-100 flex items-center justify-center p-3">
          <img
            src={camera.imageUrl}
            alt={camera.title}
            className="w-full h-full object-contain rounded-lg"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/300x200/cccccc/333333?text=Image+Missing+📷"; 
            }}
          />
        </div>

        {/* Camera Details */}
        <div className="p-5">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {camera.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {camera.description}
          </p>

          {/* Separator Line */}
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            
            {/* Price and Day */}
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl font-extrabold text-[#FF8C00]">
                ${camera.price}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                /day
              </span>
            </div>

            {/* View Details Button (Replaced Book Now) */}
            <span
              className="bg-[#FF8C00] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-200 text-sm"
            >
              View Details
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CameraCard;