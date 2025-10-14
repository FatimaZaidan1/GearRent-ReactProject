import React from 'react';

const Newsletter = () => {
  return (
    <div className='bg-gray-100 py-16'>
      <div className='mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          Subscribe to Our Newsletter
        </h2>
        <p className='text-gray-600 mb-8'>
          Get the latest deals on new camera equipment and rental offers.
        </p>
        <form className='flex flex-col sm:flex-row gap-4'>
          <input
            type='email'
            placeholder='Enter your email address'
            required
            className='flex-grow border border-gray-300 rounded-lg p-4 focus:ring-orange-500 focus:border-orange-500'
          />
          <button
            type='submit'
            className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;