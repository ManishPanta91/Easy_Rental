import React from "react";
import { useNavigate } from "react-router";

const Bike = ({ bikeData }) => {
  const nav = useNavigate();

  return (
    <>
      <div className="bg-gray-50 px-4 py-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header Section */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 max-w-32 h-px bg-gray-400" />
            <span className="mx-6 text-gray-400 text-sm font-medium tracking-wider uppercase">
              BIKES
            </span>
            <div className="flex-1 max-w-32 h-px bg-gray-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            GET YOUR <span className="text-blue-600">BIKE FOR RENT</span>
          </h1>
        </div>
      </div>

      {/* Bike Cards Section */}
      <div className="bg-gray-100 py-10 px-6 flex justify-center max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
          {bikeData?.map((bike) => (
            <div
              key={bike.id}
              className="bg-white shadow-md flex flex-col items-center text-center p-4 h-[450px] w-[300px] justify-between"
            >
              <img
                className="h-40 object-contain mb-2"
                src={bike?.image}
                alt={bike?.name}
              />
              <div>
                <h2 className="text-xl font-bold text-black">
                  {bike?.brand?.toUpperCase()}{" "}
                  <span className="text-blue-600 font-semibold">
                    {bike?.name}
                  </span>
                </h2>
                <p className="text-gray-700 mt-2">
                  Start prices from Rs {bike?.price} per day
                </p>
              </div>
              <button
                onClick={() => nav(`singlevehicle/${bike?.id}`)}
                className="mb-4 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
              >
              Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bike;
