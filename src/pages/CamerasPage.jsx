import React from 'react';
import CameraListing from '../components/CameraListings.jsx';

const CamerasPage = () => {
  return (
    <section className="bg-gray-100 py-16 min-h-[70vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
          Explore Our Camera Fleet
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Find the perfect camera, lens, or accessory for your next project.
        </p>

        <CameraListing /> {/* List of cameras */}
      </div>
    </section>
  );
};

export default CamerasPage;
