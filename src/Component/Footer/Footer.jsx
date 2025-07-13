import React from 'react';
import { FaHome, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Company Name - Centered */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Easy RentAL
          </h1>
        </div>

        {/* Main content grid */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          
          {/* Left side - Home and Contact */}
          <div className="md:w-2/3">
            <div className="flex items-center space-x-3 mb-4">
              <FaHome className="w-6 h-6 text-black" />
              <span className="text-sm text-gray-200">Home</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact us</h3>
              <div className="space-y-1 text-sm text-gray-100">
                <p>Bharatpur 5, Chitwan</p>
                <p>9812345676</p>
                <p>9826734623</p>
                <p>info@bikerentalsystem.com</p>
                <p>bikerental.com@gmail.com</p>
                <p>https://www.bikerentalsystem.com</p>
              </div>
            </div>
          </div>

          {/* Right side - Social media icons */}
          <div className="flex justify-start md:justify-end items-center space-x-6">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <FaFacebook className="w-10 h-10 text-blue-200" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <FaInstagram className="w-10 h-10 text-blue-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
