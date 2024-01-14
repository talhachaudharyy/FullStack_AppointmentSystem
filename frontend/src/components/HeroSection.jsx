import React from 'react'
import heroimg from '../assets/hero-imgs.png';

const HeroSection = () => {
  return (
      <div className="bg-transparent text-white py-16 px-4 md:px-16 lg:px-32 xl:px-50 2xl:px-96">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-lg mb-4 font-bold text-blue-700">Creating a Better Tomorrow</p>
          <h1 className="text-4xl pt-2 lg:text-5xl text-blue-950 font-bold mb-4">Find local specialists</h1>
          <h1 className="text-4xl lg:text-5xl text-blue-950 font-bold mb-4">who can take your</h1>
          <h1 className="text-4xl lg:text-5xl text-blue-950 font-bold mb-4">insurance</h1>
          <p className="text-base pt-3 mb-8 text-gray-500 "> Credibly maintain stand manufactured products nt-focused portals.Collaboratively negotiate web-enabled web services</p>
          <div className="space-x-7 pt-2">
            <button className="bg-blue-700 w-40 text-white py-2   rounded-full hover:bg-transparent hover:text-blue-700 border border-blue-700  transition duration-300">
              Discover More
            </button>
            <button className="bg-transparent w-40 border border-blue-700 text-blue-700 py-2 px-4 rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <img
            src={heroimg} 
            alt="Hero Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
