import React from 'react';

const DashboardPage = () => {
  return (
    <section className='bg-white py-16 min-h-[60vh]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold text-gray-800 mb-6'>
          Owner Dashboard
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            
            {/* Stat Box 1 */}
            <div className='bg-orange-50 border border-orange-200 p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-bold text-orange-600 mb-2'>Recent Bookings</h2>
                <p className='text-4xl font-extrabold text-gray-800'>2</p>
            </div>
            
            {/* Stat Box 2 */}
            <div className='bg-green-50 border border-green-200 p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-bold text-green-600 mb-2'>Total Earnings</h2>
                <p className='text-4xl font-extrabold text-gray-800'>$1,450</p>
            </div>
            
            {/* Stat Box 3 */}
            <div className='bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-bold text-blue-600 mb-2'>Listed Gear</h2>
                <p className='text-4xl font-extrabold text-gray-800'>5</p>
            </div>

        </div>
        
        <div className='mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Gear Management</h2>
          <p className='text-lg text-gray-600'>
            This panel will contain forms for adding new cameras and managing existing listings and bookings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;