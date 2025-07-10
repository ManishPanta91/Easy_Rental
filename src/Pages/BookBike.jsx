import React from 'react'

const BookBike = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-lg mx-auto bg-white p-6 border border-gray-300 rounded">
        
        {/* Book Now Section */}
       <h2 className="text-xl font-semibold text-gray-800 mb-4">Please Fill Up The Form In Detail For The Rental Inquiry</h2>
        
        <div className="space-y-4">
          {/* Hire Date */}
          <div>
            <label htmlFor="hireDate" className="block text-sm text-gray-600">Hire Date *</label>
            <input
              id="hireDate"
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Drop-off Date */}
          <div>
            <label htmlFor="dropOffDate" className="block text-sm text-gray-600">Drop-off Date *</label>
            <input
              id="dropOffDate"
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Selected Bike */}
          <div>
            <label htmlFor="selectedBike" className="block text-sm text-gray-600">Selected Bike *</label>
            <input
              id="selectedBike"
              className="w-full p-2 border border-gray-300 rounded"
            >
            
            </input>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Book Now
          </button>

        {/* Form Section */}
       <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">BOOK NOW</h1>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Booking Procedure:</h3>
            <p className="text-gray-700 mb-4">Submit required documents and fill out the form to book a bike.</p>
            
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Original Passport with visa or refundable cash deposit.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                ID card or Citizenship card (original).
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Valid national or international driving license.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Or a local guarantor with contact info or employer recommendation letter.
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <p className="text-gray-700 mb-2">Our bikes are well-maintained and we provide excellent service.</p>
            <p className="text-gray-700">
              For questions, contact: <span className="font-medium text-blue-600">citymotorbike.com@gmail.com</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BookBike;