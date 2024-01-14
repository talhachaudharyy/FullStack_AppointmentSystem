import React from 'react';
import Appointmentimg from '../assets/appointment-imgs.png';
import Card from './Card';
import { Link } from 'react-router-dom';

const Appointment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between py-6 lg:py-8 px-4 lg:px-16">
      {/* Left Side */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h4 className="text-sm font-bold mb-2 lg:mb-3 text-blue-700">APPOINTMENT</h4>
        <h2 className="text-2xl lg:text-4xl font-bold pb-6 lg:pb-12 text-blue-950">Book an appointment today, We are online</h2>
        <p className="mb-3 lg:mb-4 text-gray-600">We've combined a new kind of doctor's experience that blends the highest level of health care with exceptional service. People can enroll membership by paying only an annual membership fee of just $129.</p>
        <p className="mb-3 lg:mb-4 text-gray-600">People can enroll membership of doctor's experience that blends the highest level of health care with exceptional service. People can enroll.</p>
        <ul role="list" className="marker:text-blue-800 mt-3 lg:mt-4 ml-0 list-disc pl-5 space-y-2 lg:space-y-3 pb-0 lg:pb-5 text-blue-900">
          <li className='text-base lg:text-lg'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</li>
          <li className='text-base lg:text-lg'>Mauris Sit Amet Velit At Tortor Fermentum Porta.</li>
          <li className='text-base lg:text-lg'>Vestibulum A Arcu In Enim Pellentesque Malesuada.</li>
        </ul>
          <Link to="/booking">
          <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-400 transition duration-300" >
            Appointment Booking
          </button>
          </Link>

      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 lg:ml-8">
        <img
          src={Appointmentimg}
          alt="Image"
          className="w-full h-auto lg:h-auto lg:w-5/6"
        />
      </div>
    </div>
  );
};

export default Appointment;
