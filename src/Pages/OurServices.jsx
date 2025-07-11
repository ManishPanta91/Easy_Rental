// components/OurServices.jsx
import React from "react";
import { FaMotorcycle, FaCalendarCheck, FaWallet, FaMapMarkerAlt, FaCheckCircle, FaClock } from "react-icons/fa";

const services = [
    
  {
    icon: <FaMotorcycle className="text-3xl text-[#025CA3]" />,
    title: "Bike & Scooter Rentals",
    desc: "Choose from a wide range of well-maintained bikes and scooters — from fuel-efficient scooters to powerful motorbikes — all available at budget-friendly rates.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-[#025CA3]" />,
    title: "Easy Online Booking",
    desc: "Book your ride in just a few clicks. Our user-friendly platform allows you to check availability and reserve your vehicle instantly.",
  },
  {
    icon: <FaWallet className="text-3xl text-[#025CA3]" />,
    title: "Affordable Pricing",
    desc: "Enjoy transparent and competitive pricing with no hidden charges. Pay only for what you use.",
  },
  {
    icon: <FaClock className="text-3xl text-[#025CA3]" />,
    title: "Flexible Rental Plans",
    desc: "Need a ride for a few hours, a day, or a week? We offer rental options that suit your schedule and needs.",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-[#025CA3]" />,
    title: "Convenient Pickup Locations",
    desc: "Pick up your vehicle from various easy-to-access locations around the city.",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-[#025CA3]" />,
    title: "Safe & Verified Vehicles",
    desc: "All our vehicles are regularly inspected and sanitized for your safety and comfort.",
  },
];

const OurServices = () => {

  return (
    <section className="bg-white py-16 px-6 md:px-20" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#025CA3] mb-12">
          🚀 Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
