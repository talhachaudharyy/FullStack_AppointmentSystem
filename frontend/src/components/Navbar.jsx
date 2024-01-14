import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


import { getToken } from '../services/LocalStorageService';

const Navbar = () => {
  const { access_token } = getToken();

  // Use state to track the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-transparent py-4 px-6 md:px-16 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/header-logo.png"
          alt="Logo"
          className="pt-5"
        />
      </div>

      {/* Mobile Menu Button (Small Devices) */}
      <div className="md:hidden">
        <button className="text-black" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Small Devices) */}
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 w-64 h-full  bg-white p-4 space-y-4">
          <button className="text-black" onClick={closeMobileMenu}>
          <IoClose size='20' />
          </button>
          <ul className="space-y-5">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={closeMobileMenu}>
                Find A Doctor
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="space-x-10">
        {access_token ? (
          <Link to="/profile">
            <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-400 transition duration-300">
              Profile
            </button>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <button className="px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-400 transition duration-300">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
          
        </div>
      )}

      {/* Navigation Links (Large Devices) */}
      <ul className="hidden pt-4 md:flex space-x-9">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Services</Link>
        </li>
        <li>
          <Link to="/booking">Find a Doctor</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

      {/* Login/Signup Buttons (Large Devices) */}
      <div className="hidden md:flex space-x-10">
        {access_token ? (
          <Link to="/profile">
            <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-400 transition duration-300">
              Profile
            </button>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <button className="px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-400 transition duration-300">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
