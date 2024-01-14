import React from 'react';
import infoimg from '../assets/doctor-img.png';

const InfoSection = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Side (Image) */}
        <div className="md:w-1/2">
          <img
            src={infoimg}
            alt="Doctor Img"
            className="w-full md:max-w-lg mx-auto rounded-lg"
          />
        </div>
        {/* Right Side (Text) */}
        <div className="md:w-1/2 md:ml-8 text-center md:text-left">
          <p className="font-bold pb-2 md:pb-5 text-blue-600">ABOUT US</p>
          <h2 className="text-2xl md:text-4xl font-bold mt-3">Consult a doctor at any time, anywhere</h2>
          <p className="mt-3 md:mt-5 line text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            feugiat, augue nec posuere tincidunt, turpis velit laoreet justo.
          </p>
          <ul role="list" className="marker:text-blue-800 mt-3 md:mt-4 ml-0 list-disc pl-5 space-y-2 md:space-y-3 pb-5 md:pb-12 pt-3 md:pt-5 text-blue-900">
            <li className='text-base md:text-lg'>5 cups chopped Porcini mushrooms</li>
            <li className='text-base md:text-lg'>5 cups chopped Porcini mushrooms</li>
            <li className='text-base md:text-lg'>5 cups chopped Porcini mushrooms</li>
          </ul>
          <button className="bg-blue-700 w-40 md:w-52 text-white py-2 md:py-3 rounded-full hover:bg-transparent hover:text-blue-700 border border-blue-700 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
