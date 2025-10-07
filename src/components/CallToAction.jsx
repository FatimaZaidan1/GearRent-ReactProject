import React from 'react';
import { Link } from 'react-router-dom';

// Call to action for gear owners to list their equipment.
const CallToAction = () => {
  return (
    <div className='bg-gray-800 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-4xl font-extrabold text-white'>
          Want to Rent Out Your Gear?
        </h2>
        <p className='mt-4 text-xl text-gray-300'>
          Become a Camera Rental partner and start earning today!
        </p>
        <Link
          to='/list-gear'
          className='mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105'
        >
          List Your Camera
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;