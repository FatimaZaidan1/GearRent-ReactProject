import React from 'react';

const MyBookingsPage = () => {
  return (
    <section className='bg-white py-16 min-h-[60vh]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold text-gray-800 mb-6'>
          My Rental Bookings
        </h1>
        <div className='p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md'>
          <p className='text-xl text-gray-600'>
            This section displays the user's booking history and management panel, consistent with the tutorial's design.
          </p>
          <ul className='mt-4 space-y-2 text-gray-700'>
              <li>- Booking Status (e.g., Confirmed, Returned)</li>
              <li>- Details of the rented camera and dates</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyBookingsPage;