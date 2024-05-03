import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white p-3 hidden md:block ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl ">
            Logo
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-4 gap-4">
              <a href="#" className="text-black hover:text-green-500 underline font-bold text-xl hometag ">Home</a>
              <a href="#" className="text-black font-bold hover:text-green-500 text-xl  ">Services</a>
              <a href="#" className="text-black hover:text-green-500 font-bold text-xl">Blog</a>
              <a href="#" className="text-black hover:text-green-500 font-bold text-xl">Offers</a>
              <a href="#" className="text-black hover:text-green-500 font-bold text-xl">About Us</a>
            </div>
          </div>
          {/* Icons */}
          <div className="flex space-x-4 gap-6">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl cursor-pointer' />
            <FontAwesomeIcon icon={faBell} className='text-2xl cursor-pointer' />
            <FontAwesomeIcon icon={faUser}  className='text-2xl cursor-pointer'/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
