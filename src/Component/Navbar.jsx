// Navbar.jsx
import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <nav className="flex justify-around items-center px-4 md:px-12 py-10 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold text-[#025CA3]">Easy RentAL</div>
      
      {/* Navigation Links */}
      <div className="flex space-x-4 md:space-x-8">
        <a onClick={(()=>navigate("/"))} href="#" className="text-blue-600 font-semibold">HOME</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">BIKES FOR RENT</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">OUR SERVICES</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">ABOUT US</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">FAQS</a>
        <div className="flex justify-center items-center space-x-3">
        <button onClick={(()=>navigate("/login"))} className="px-4 py-1 cursor-pointer border border-blue-500 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition">
          Login
        </button>
        <button onClick={(()=>navigate("/Signup"))}   className="px-4 py-1 cursor-pointer border border-blue-500 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition">
          Signup
        </button>
      </div>

      </div>

  

    </nav>
  );
};

export default Navbar;