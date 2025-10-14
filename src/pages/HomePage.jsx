import React from 'react';
import Hero from '../components/Hero';
import CameraListings from '../components/CameraListings';
import CallToAction from '../components/CallToAction';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter'; // New

const HomePage = () => {
  return (
    <>
      <Hero /> 
      
      <section className='bg-white pt-10 pb-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-10'>Featured Cameras</h2>
            <CameraListings limit={3} isFeatured={true} />
        </div>
      </section>

      <CallToAction /> 
      <Testimonial />
      <Newsletter /> {/* Added */}
    </>
  );
};

export default HomePage;