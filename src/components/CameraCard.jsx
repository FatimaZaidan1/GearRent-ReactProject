import React from 'react';
import { Link } from 'react-router-dom';

const CameraCard = ({ camera }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col">
    <img
      src={camera.imageUrl}  // must match property name
      alt={camera.title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-bold text-gray-900 mb-2">{camera.title}</h3>
    <p className="text-gray-600 mb-4">{camera.description}</p>
    <p className="text-gray-800 font-semibold mb-4">${camera.price}/day</p>
    <Link to={`/camera/${camera.id}`}>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md mt-auto">
        Book Now
      </button>
    </Link>
  </div>
);

export default CameraCard;
