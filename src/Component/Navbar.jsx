import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../App/auth/usersSlice";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white max-w-7xl mx-auto  px-4 md:px-12 py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-[#025CA3]">
          Easy RentAL
        </div>

        {/* Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a onClick={() => navigate("/")} href="#" className="text-blue-600 font-semibold">
            HOME
          </a>
          <a onClick={() => navigate("/rent")} href="#" className="text-gray-800 hover:text-blue-600">
            BIKES FOR RENT
          </a>
          <a onClick={() => navigate("/service")} href="#" className="text-gray-800 hover:text-blue-600">
            OUR SERVICES
          </a>
          <a onClick={() => navigate("/aboutus")} href="#" className="text-gray-800 hover:text-blue-600">
            ABOUT US
          </a>
          <a onClick={() => navigate("/FAQS")} href="#" className="text-gray-800 hover:text-blue-600">
            FAQS
          </a>
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 border bg-[#025CA3] text-white rounded-md hover:bg-blue-700 transition"
            >
              LogOut
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 border bg-[#025CA3] text-white rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/Signup")}
                className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition"
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a onClick={() => navigate("/")} href="#" className="block text-blue-600 font-semibold">
            HOME
          </a>
          <a onClick={() => navigate("/rent")} href="#" className="block text-gray-800 hover:text-blue-600">
            BIKES FOR RENT
          </a>
          <a onClick={() => navigate("/service")} href="#" className="block text-gray-800 hover:text-blue-600">
            OUR SERVICES
          </a>
          <a onClick={() => navigate("/aboutus")} href="#" className="block text-gray-800 hover:text-blue-600">
            ABOUT US
          </a>
          <a onClick={() => navigate("/FAQS")} href="#" className="block text-gray-800 hover:text-blue-600">
            FAQS
          </a>
          <div className="flex flex-col space-y-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 cursor-pointer py-2 border bg-[#025CA3] text-white rounded-md hover:bg-blue-700 transition"
              >
                LogOut
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 cursor-pointer py-2 border bg-[#025CA3] text-white rounded-md hover:bg-blue-700 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/Signup")}
                  className="px-4 cursor-pointer py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition"
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
