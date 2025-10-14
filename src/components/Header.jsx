import React from 'react';

const Header = () => {
  return (
    // Section container with a light background to make the content pop
    <div className="bg-gray-50 pt-16 pb-20 lg:py-24"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h4 className="text-xl font-bold text-[#FF8C00] uppercase mb-3 tracking-wider">
              Plan your perfect shot
            </h4>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Rent quality gear <br className="hidden md:block" /> for your next production.
            </h1>
            <p className="text-gray-600 text-lg mb-10 max-w-lg lg:mx-0 mx-auto">
              Explore our wide selection of professional cameras, lenses, and accessories with flexible rental plans.
            </p>
            
            <a 
              href="/cameras"
              className="inline-block bg-[#FF8C00] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-orange-600 transition duration-300 transform hover:scale-[1.02]"
            >
              Browse Cameras
            </a>
          </div>

          {/* Right Side: Hero Image Placeholder */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            {/* Using a placeholder image that resembles professional camera gear */}
            <img 
                src="https://placehold.co/600x400/FF8C00/ffffff?text=Professional+Camera+Gear" 
                alt="Professional Camera Gear" 
                className="w-full max-w-lg h-auto rounded-xl shadow-2xl object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/4B5563/ffffff?text=Camera+Placeholder"; }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
