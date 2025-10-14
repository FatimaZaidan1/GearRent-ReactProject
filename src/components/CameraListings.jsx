import React from 'react';
import CameraCard from './CameraCard.jsx'; // Make sure this path is correct
import cameraData from '../data/cameraData.js'; // Import your mock data

const CameraListing = () => {
  // We can filter this data later if we need to show only featured cameras
  const camerasToDisplay = cameraData.slice(0, 6); // Display up to 6 cameras on the homepage

  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Our Featured Rental Gear
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Hand-picked cameras for your next award-winning production.
        </p>

        {/* Camera Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {camerasToDisplay.map((camera) => (
            // Pass the camera object to the CameraCard component
            <CameraCard key={camera.id} camera={camera} />
          ))}
        </div>

        {/* Call to Action Button below the listing */}
        <div className="mt-12 text-center">
          <a
            href="/cameras"
            className="inline-block bg-gray-900 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300"
          >
            View All 25+ Cameras
          </a>
        </div>
      </div>
    </div>
  );
};

export default CameraListing;
