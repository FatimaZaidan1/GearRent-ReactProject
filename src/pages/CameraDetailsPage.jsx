import React from 'react';
import { useParams } from 'react-router-dom';

const CameraDetailsPage = () => {
    // This hook gets the :id from the URL (e.g., /camera/1)
    const { id } = useParams(); 

    // Placeholder data (replace with API fetching later)
    const camera = { 
        id: id,
        title: 'Sony Alpha a7 IV',
        brand: 'Sony',
        price: 95,
        specs: ['33MP Full-Frame Sensor', '4K 60p Video', 'In-Body Stabilization'],
        description: "The perfect hybrid camera, balancing high-resolution stills and professional video capabilities.",
        location: 'Los Angeles, CA',
        owner: 'ProGear Rentals',
    };

  return (
    <section className='bg-gray-100 py-16 min-h-[70vh]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          
          {/* Left Column: Details and Image */}
          <div className='lg:col-span-2 bg-white p-8 rounded-xl shadow-lg'>
            <h1 className='text-4xl font-extrabold text-gray-800 mb-2'>{camera.title}</h1>
            <p className='text-xl text-orange-600 font-semibold mb-6'>{camera.brand}</p>
            
            {/* Image Placeholder */}
            <div className='h-96 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500 text-2xl'>
                Camera Image Placeholder 📷
            </div>

            <h2 className='text-2xl font-bold text-gray-800 mb-3'>Description</h2>
            <p className='text-gray-700 mb-8'>{camera.description}</p>

            <h2 className='text-2xl font-bold text-gray-800 mb-3'>Specifications</h2>
            <ul className='list-disc list-inside space-y-2 text-gray-700'>
                {camera.specs.map((spec, index) => <li key={index}>{spec}</li>)}
            </ul>
          </div>

          {/* Right Column: Booking Form */}
          <div className='lg:col-span-1 bg-white p-8 rounded-xl shadow-lg h-fit'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
                <span className='text-5xl text-orange-600'>${camera.price}</span> / Day
            </h2>
            
            <form className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-700 border-b pb-2 mb-4'>Rental Period</h3>
                <label className='block text-gray-700 font-medium'>Pickup Date</label>
                <input
                    type='date'
                    required
                    className='border border-gray-300 rounded-lg p-3 w-full focus:ring-orange-500 focus:border-orange-500'
                />
                <label className='block text-gray-700 font-medium'>Return Date</label>
                <input
                    type='date'
                    required
                    className='border border-gray-300 rounded-lg p-3 w-full focus:ring-orange-500 focus:border-orange-500'
                />
                <div className='pt-4'>
                    <button
                        type='submit'
                        className='w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300'
                    >
                        Reserve Now
                    </button>
                </div>
            </form>
            
            <div className='mt-6 pt-6 border-t'>
                <p className='text-gray-600 text-sm'>
                    Listed by: <span className='font-semibold'>{camera.owner}</span>
                </p>
                <p className='text-gray-600 text-sm'>
                    Location: <span className='font-semibold'>{camera.location}</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraDetailsPage;