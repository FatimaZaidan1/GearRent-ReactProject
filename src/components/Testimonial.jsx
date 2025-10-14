import React from 'react';

// Placeholder for the Testimonials section.
const Testimonial = () => {
  const testimonials = [
    { quote: "The best selection of cinema lenses I've found online. Booking was quick and easy!", name: "Sarah M.", role: "Filmmaker" },
    { quote: "Reliable service and great pricing. My go-to for all photo shoot equipment.", name: "Alex P.", role: "Photographer" },
  ];
  
  return (
    <div className='bg-white py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-12'>Hear From Our Customers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {testimonials.map((t, index) => (
            <div key={index} className='p-8 bg-gray-50 rounded-xl shadow-md'>
              <p className='text-lg italic text-gray-700 mb-4'>
                "{t.quote}"
              </p>
              <div className='font-semibold text-gray-800'>
                {t.name}
              </div>
              <div className='text-sm text-orange-500'>
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;