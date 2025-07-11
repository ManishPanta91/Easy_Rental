import React from "react";
import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BikeDetailpage from "../Pages/BikeDetailpage";
import Loginpage from "../Pages/Loginpage";
import Signuppage from "../Pages/Signuppage";
import BookBike from "../Pages/BookBike";
import OurServices from "../Pages/OurServices";
import AboutUs from "../Pages/AboutUs";
import FaqPage from "../Pages/FaqPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singlevehicle/:id" element={<BikeDetailpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/bookbike" element={<BookBike />} />
        <Route path="/service" element={<OurServices />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/FAQS" element={<FaqPage />} />


      </Routes>
    </>
  );
};

export default Router;
