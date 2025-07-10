import React from 'react';
import { FaHome, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Company Name - Centered */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            Easy RentAL
          </h1>
        </div>
        
        {/* Main Content Row */}
        <div className="flex items-start justify-between">
          
          {/* Left Side - Home Icon and Contact Info */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <FaHome className="w-8 h-8 text-black" />
              <span className="text-sm text-gray-300">Home</span>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact us</h3>
              <div className="space-y-1 text-sm">
                <p>Bharatpur 5,Chitwan</p>
                <p>9812345676</p>
                <p>9826734623</p>
                <p>info@bikerentalsystem.com</p>
                <p>bikerental.com@gmail.com</p>
                <p>https://www.bikerentalsystem.com</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Social Media Icons */}
          <div className="flex items-center space-x-6 mt-50">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <FaFacebook className="w-12 h-12 text-blue-200" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <FaInstagram className="w-12 h-12 text-blue-200" />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}