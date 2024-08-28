import React from 'react';
import midimg1 from '../../../src/assets/midimg1.jpg';

const Midd1: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 mt-10 flex justify-center">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Dotted Border Wrapper */}
        <div className="border-dotted border-2 border-gray-600 p-4 rounded-xl">
          {/* Top Section - Full Width Image */}
          <div className="w-full">
            <div className="relative w-full h-[500px] lg:h-[600px] mb-4">
              <img
                src={midimg1.src}
                alt="Fashion"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Shop Now Button - Positioned Below the Image */}
            <div className="flex justify-center mb-12">
              <button className="bg-gray-600 text-white px-6 py-3 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8">
            {/* Filters and Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Filters and Text */}
              <div>
                {/* Filter Buttons */}
                <div className="flex space-x-4 mb-6 justify-center lg:justify-start">
                  <button className="border border-gray-600 px-4 py-2 rounded-md">All</button>
                  <button className="border border-gray-600 px-4 py-2 rounded-md">Mens</button>
                  <button className="border border-gray-600 px-4 py-2 rounded-md">Womens</button>
                  <button className="border border-gray-600 px-4 py-2 rounded-md">Kids</button>
                </div>

                {/* Text Section */}
                <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
                  ELEVATE YOUR STYLE WITH STYLELOOM
                </h2>
                <p className="text-lg text-center lg:text-left">
                  Explore a world of fashion at StyleLoom, where trends meet affordability. 
                  Immerse yourself in the latest styles and seize exclusive promotions.
                </p>
              </div>

              {/* Right Column - Statistics */}
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="border-dotted border-2 border-gray-600 p-4">
                  <span className="block text-4xl font-bold">1,500+</span>
                  <span className="block mt-2">Fashion Products</span>
                </div>
                <div className="border-dotted border-2 border-gray-600 p-4">
                  <span className="block text-4xl font-bold">50+</span>
                  <span className="block mt-2">New arrivals every month.</span>
                </div>
                <div className="border-dotted border-2 border-gray-600 p-4">
                  <span className="block text-4xl font-bold">30%</span>
                  <span className="block mt-2">OFF on select items.</span>
                </div>
                <div className="border-dotted border-2 border-gray-600 p-4">
                  <span className="block text-4xl font-bold">95%</span>
                  <span className="block mt-2">Customer Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midd1;
