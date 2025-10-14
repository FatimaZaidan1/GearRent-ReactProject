import React from 'react';
// NOTE: Removed 'import { LuCamera } from "react-icons/lu";' to fix the compilation error.

// This component displays a single camera card
const CameraCard = ({ camera }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden">
      
      {/* Camera Image Section */}
      <div className="h-48 bg-gray-100 flex items-center justify-center p-3">
        {/*
          Uses the actual image URL from the camera data (imported locally).
          We use object-contain to ensure the camera fits within the card space.
        */}
        <img
          src={camera.imageUrl}
          alt={camera.title}
          className="w-full h-full object-contain rounded-lg"
          // We can skip the onError fallback since local imports usually succeed, 
          // or use a simpler placeholder:
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

          {/* Booking Button */}
          <button
            onClick={() => console.log(`Booking ${camera.title}`)}
            className="bg-[#FF8C00] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-200 text-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraCard;
