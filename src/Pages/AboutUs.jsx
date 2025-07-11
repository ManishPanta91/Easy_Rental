import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0f4f8] to-white py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#025CA3] text-center mb-10">
          About EasyRental
        </h2>

        <div className="text-center text-lg text-gray-700 mb-12 space-y-6 max-w-3xl mx-auto">
          <p>
            <strong>EasyRental</strong> is your trusted partner for convenient and affordable two-wheeler rentals. Whether it’s for daily commuting or weekend adventures, we make mobility easy and budget-friendly.
          </p>
          <p>
            We offer a wide selection of well-maintained bikes and scooters, flexible rental plans, and seamless booking options — all designed to give you freedom on the go.
          </p>
          <p>
            Our team is committed to providing safe, reliable, and sanitized rides so you can travel worry-free, anytime and anywhere in Bharatpur or nearby.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
            <FaMapMarkerAlt className="text-3xl text-[#025CA3] mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Our Location</h4>
            <p className="text-gray-600">Bharatpur, Chitwan, Nepal</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
            <FaEnvelope className="text-3xl text-[#025CA3] mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Email Us</h4>
            <p className="text-gray-600">support@easyrental.com</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
            <FaPhoneAlt className="text-3xl text-[#025CA3] mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Call Us</h4>
            <p className="text-gray-600">+977-9800000000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
