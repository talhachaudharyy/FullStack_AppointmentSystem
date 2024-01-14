import React from 'react';
import icon1 from '../assets/service-icon1.png';
import icon2 from '../assets/service-icon2.png';
import icon3 from '../assets/service-icon3.png';
import icon4 from '../assets/service-icon4.png';
import icon5 from '../assets/service-icon5.png';
import icon6 from '../assets/service-icon6.png';

const Care = () => {
  return (
    <section className="bg-white px-4 md:px-8 lg:px-16 py-6 md:py-12 lg:py-16">
      <div className="text-center">
        <p className="text-sm text-blue-700 mt-5 font-bold">POPULAR MEDICAL SERVICES</p>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mt-4 md:mt-8">Benefit For Physical Mental </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mb-6 lg:mb-8 ">and Virtual Care</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Box 1 */}
        <div className="bg-orange-100 bg-opacity-50 items-center rounded-lg p-6">
          <img
            src={icon1}
            alt="Image 1"
            className="w-auto mx-auto md:max-w-xs lg:max-w-none h-auto rounded-md mb-4"
          />
          <h3 className="text-lg md:text-xl text-center text-blue-950 font-bold mb-2">Cardiology</h3>
          <p className="text-gray-600 text-center mt-2 md:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.</p>
          <a href="#" className="text-blue-500 px-4 md:px-12 mt-2 md:mt-4 inline-block">Read More</a>
        </div>

        {/* Box 2 */}
        <div className="bg-purple-100 bg-opacity-50 items-center rounded-lg p-6">
          <img
            src={icon2}
            alt="Image 2"
            className="w-auto mx-auto md:max-w-xs lg:max-w-none h-auto rounded-md mb-4"
          />
          <h3 className="text-lg md:text-xl text-center text-blue-950 font-bold mb-2">Pulmonary</h3>
          <p className="text-gray-600 text-center mt-2 md:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.</p>
          <a href="#" className="text-blue-500 px-4 md:px-12 mt-2 md:mt-4 inline-block">Read More</a>
        </div>

        {/* Box 3 */}
        <div className="bg-sky-100 bg-opacity-50 items-center rounded-lg p-6">
          <img
            src={icon3}
            alt="Image 3"
            className="w-auto mx-auto md:max-w-xs lg:max-w-none h-auto rounded-md mb-4"
          />
          <h3 className="text-lg md:text-xl text-center text-blue-950 font-bold mb-2">Neurology</h3>
          <p className="text-gray-600 text-center mt-2 md:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.</p>
          <a href="#" className="text-blue-500 px-4 md:px-12 mt-2 md:mt-4 inline-block">Read More</a>
        </div>

        {/* Box 4 */}
        <div className="bg-pink-100 bg-opacity-50 items-center rounded-lg p-6">
          <img
            src={icon4}
            alt="Image 4"
            className="w-auto mx-auto md:max-w-xs lg:max-w-none h-auto rounded-md mb-4"
          />
          <h3 className="text-lg md:text-xl text-center text-blue-950 font-bold mb-2">Dermatology</h3>
          <p className="text-gray-600 text-center mt-2 md:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.</p>
          <a href="#" className="text-blue-500 px-4 md:px-12 mt-2 md:mt-4 inline-block">Read More</a>
        </div>

        {/* Box 5 */}
        <div className="bg-green-100 bg-opacity-50 items-center rounded-lg p-6">
          <img
            src={icon5}
            alt="Image 5"
            className="w-auto mx-auto md:max-w-xs lg:max-w-none h-auto rounded-md mb-4"
          />
          <h3 className="text-lg md:text-xl text-center text-blue-950 font-bold mb-2">COVID - 19</h3>
          <p className="text-gray-600 text-center mt-2 md:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.</p>
          <a href="#" className="text-blue-500 px-4 md:px-12 mt-2 md:mt-4 inline-block">Read More</a>
        </div>

        {/* Box 6 */}
        <div className="bg-blue-100 bg-opacity-50 items-center rounded-lg p-6">
          <img
            src={icon6}
            alt="Image 6"
            className="w-auto mx-auto md:max-w-xs lg:max-w-none h-auto rounded-md mb-4"
          />
          <h3 className="text-lg md:text-xl text-center text-blue-950 font-bold mb-2">Orthopedics</h3>
          <p className="text-gray-600 text-center mt-2 md:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.</p>
          <a href="#" className="text-blue-500 px-4 md:px-12 mt-2 md:mt-4 inline-block">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Care;
