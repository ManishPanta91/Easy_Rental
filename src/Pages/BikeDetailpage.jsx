import React from 'react';
import { useGetsallVechclesidQuery } from '../App/posts/easyrentalapi';
import { useNavigate, useParams } from 'react-router';

const BikeDetailpage = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const { data, isLoading } = useGetsallVechclesidQuery(id);
  console.log("data of vehicles by id", data);

  if (isLoading) return <div className="text-center mt-10 text-lg">Loading...</div>;

  return (
    <div className='flex max-w-7xl items-center justify-center mx-auto gap-3 mt-[50px]'>
      <div>
        <div>
          <img src={data?.data?.image} alt="" />
        </div>
      </div>


      <div className="p-8 bg-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Honda CB <span className="text-blue-600">Honda</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium w-32">Price:</span>
                  <span className="text-gray-800 font-semibold text-lg">{data?.data?.price}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium w-32">Engine Capacity:</span>
                  <span className="text-gray-800 font-semibold text-lg">{data?.data?.engine}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium w-32">Mileage:</span>
                  <span className="text-gray-800 font-semibold text-lg">{data?.data?.mileage}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium w-32">Registration Num:</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">{data?.data?.registration_num}</span>
               
                </div>
              </div>
              
              <button onClick={(()=>nav("/bookbike"))} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 w-full">
                Hire Now
              </button>
            </div>
    </div>
     
     
     
    
  );
};

export default BikeDetailpage;
