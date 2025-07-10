// SignUpPage.jsx
import React from 'react';

const Signuppage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl px-8 py-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-[#025CA3] mb-6">REGISTER</h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter an email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
            />
          </div>
         <div>
  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
    Password
  </label>
  <input
    type="password"
    id="password"
    placeholder="Enter password"
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
  />
</div>
<div>
  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
    Confirm Password
  </label>
  <input
    type="password"
    id="confirmPassword"
    placeholder="Re-enter password"
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
  />
</div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#025CA3] text-white font-semibold py-2 rounded-md hover:bg-[#014a82] transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signuppage;
