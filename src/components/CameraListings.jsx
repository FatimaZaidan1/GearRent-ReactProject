import React from 'react';
import CameraCard from './CameraCard.jsx';
import cameraData from '../data/cameraData.js'; // Your mock data

const CameraListings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cameraData.map((camera) => (
        <CameraCard key={camera.id} camera={camera} />
      ))}
    </div>
  );
};

export default CameraListings;
