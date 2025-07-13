import React, { useState } from "react";
import bike1 from "../assets/bike1.jpg"; // Replace with your actual image
import bike2 from "../assets/bike2.jpg"; // Replace with your actual image

const Home = () => {
  const [activeTab, setActiveTab] = useState("bike");

  return (
    <div className="bg-white  px-6 md:px-85 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="max-w-xl">
        <div className="mb-6">
          <div className="h-1 w-16 bg-black mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            WE PROVIDE{" "}
            <span className="text-blue-600">BIKES <br /> AND SCOOTER</span> FOR RENT
          </h1>
        </div>
        <p className="text-sm text-gray-700 font-medium mb-8">
          Books directly from local suppliers. No Commissions, No Markups
        </p>

        {/* Tabs */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("bike")}
            className={`px-6 py-3 rounded-xl font-medium text-white ${
              activeTab === "bike" ? "bg-[#025CA3]" : "bg-gray-200 text-gray-600"
            }`}
          >
            BIKE FOR RENT
          </button>
          <button
            onClick={() => setActiveTab("scooter")}
            className={`px-6 py-3 rounded-xl font-medium ${
              activeTab === "scooter" ? "bg-[#025CA3] text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            SCOOTER FOR RENT
          </button>
        </div>
      </div>

      {/* Right Section - Image Carousel (Static for now) */}
      <div className="flex gap-6 items-center">
        <div className="w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={activeTab === "bike" ? bike1 : bike2}
            alt="Bike or Scooter"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[100px] h-[300px] rounded-2xl overflow-hidden shadow-md hidden md:block">
          <img
            src={activeTab === "bike" ? bike2 : bike1}
            alt="Second image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
