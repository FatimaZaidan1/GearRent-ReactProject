import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-[70vh]'>
      <h1 className='text-6xl font-bold text-gray-800 mb-4'>404 Not Found</h1>
      <p className='text-xl mb-5 text-gray-600'>The page you are looking for does not exist.</p>
      <Link
        to='/'
        className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300'
      >
        Go Back to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;