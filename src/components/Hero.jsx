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
        
        {/* The Rental Search Form - Updated with Labels */}
        <div className='mt-10 p-6 bg-white rounded-xl shadow-2xl max-w-4xl mx-auto'>
            <h2 className='text-xl font-bold text-gray-800 mb-4'>Find Your Gear</h2>
            <form className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                
                {/* 1. Location Input with Label */}
                <div className="flex flex-col">
                    <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1 text-left">City/Location</label>
                    <input
                        id="location"
                        type='text'
                        placeholder='Enter city name'
                        className='border border-gray-300 rounded-lg p-3 w-full focus:ring-[#F59B3F] focus:border-[#F59B3F]'
                    />
                </div>

                {/* 2. Pickup Date Input with Label */}
                <div className="flex flex-col">
                    <label htmlFor="pickup-date" className="text-sm font-medium text-gray-700 mb-1 text-left">Pickup Date</label>
                    <input
                        id="pickup-date"
                        type='date'
                        className='border border-gray-300 rounded-lg p-3 w-full text-gray-500 focus:ring-[#F59B3F] focus:border-[#F59B3F]'
                    />
                </div>
                
                {/* 3. Return Date Input with Label */}
                <div className="flex flex-col">
                    <label htmlFor="return-date" className="text-sm font-medium text-gray-700 mb-1 text-left">Return Date</label>
                    <input
                        id="return-date"
                        type='date'
                        className='border border-gray-300 rounded-lg p-3 w-full text-gray-500 focus:ring-[#F59B3F] focus:border-[#F59B3F]'
                    />
                </div>
                
                {/* 4. Search Button (aligned to fill the grid space) */}
                <div className="flex flex-col justify-end">
                    {/* The label space is used to vertically align the button */}
                    <label className="text-sm font-medium text-white mb-1 h-0 pointer-events-none" aria-hidden="true">&nbsp;</label> 
                    <button
                        type='submit'
                        // Changed background to match your brand color
                        style={{ backgroundColor: '#FF8C00' }} 
                        className='hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 w-full'
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;