import React from "react";
import { useNavigate } from "react-router";

const Scuter = ({ scuterDetails }) => {
  console.log("data in bike component", scuterDetails);
  const nav = useNavigate();

  return (
    <>
      <div className="bg-gray-50  px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 max-w-32">
              <div className="h-px bg-gray-400"></div>
            </div>
            <div className="mx-6">
              <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
                Sccoters
              </span>
            </div>
            <div className="flex-1 max-w-32">
              <div className="h-px bg-gray-400"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            GET YOUR <span className="text-blue-600">SCCOTERS FOR RENT</span>
          </h1>
        </div>
      </div>
      <div className="bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scuterDetails?.map((sccoter) => (
            <div
              key={sccoter.id}
              className="flex flex-col gap-3 shadow-2xl h-[500px] w-full max-w-[400px] mx-auto"
            >
              <img
                className="object-cover h-[300px] w-full"
                src={sccoter?.image}
                alt={sccoter?.name}
              />
              <div className="px-3 flex flex-col">
                <h2 className="text-3xl text-center font-bold mt-2">
                  {sccoter.name}
                </h2>
                <p className="text-center mt-2">{sccoter?.brand}</p>
                <button className="mt-2 py-4 px-2 rounded-2xl bg-green-400 cursor-pointer">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Scuter;
