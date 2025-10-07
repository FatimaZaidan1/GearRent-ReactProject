import React from 'react';

// Main banner section with the rental search form, utilizing your brand color.
const Hero = () => {
  return (
    <div className='bg-gray-100 relative' style={{ backgroundColor: '#F59B3F' }}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center'>
          <h1 className='text-5xl font-extrabold text-white sm:text-6xl md:text-7xl'>
            Capture Your Vision
          </h1>
          <p className='mt-4 text-xl text-white opacity-90'>
            Rent the best cameras, lenses, and lighting equipment today.
          </p>
        </div>
        
        {/* The Rental Search Form - Simplified version of the tutorial's form */}
        <div className='mt-10 p-6 bg-white rounded-xl shadow-2xl max-w-4xl mx-auto'>
            <h2 className='text-xl font-bold text-gray-800 mb-4'>Find Your Gear</h2>
            <form className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <input
                    type='text'
                    placeholder='City/Location'
                    className='border border-gray-300 rounded-lg p-3 w-full'
                />
                <input
                    type='date'
                    placeholder='Pickup Date'
                    className='border border-gray-300 rounded-lg p-3 w-full'
                />
                <input
                    type='date'
                    placeholder='Return Date'
                    className='border border-gray-300 rounded-lg p-3 w-full'
                />
                <button
                    type='submit'
                    className='bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300'
                >
                    Search
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;