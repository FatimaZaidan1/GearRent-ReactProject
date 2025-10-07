import React from 'react';
import Hero from '../components/Hero';
import CameraListings from '../components/CameraListings';
import CallToAction from '../components/CallToAction';
import Testimonial from '../components/Testimonial';

const HomePage = () => {
  return (
    <>
      {/* Main banner with the rental search form */}
      <Hero /> 
      
      <section className='bg-white pt-10 pb-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-10'>Featured Cameras</h2>
            {/* Display a limited, featured list */}
            <CameraListings limit={3} isFeatured={true} />
        </div>
      </section>

      {/* Call to action for owners/listers */}
      <CallToAction /> 

      {/* Testimonials section */}
      <Testimonial />
    </>
  );
};

export default HomePage;