import React from "react";

import Navbar from "../Component/Navbar";
import Router from "../Router/Router";

import Footer from "../Component/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Router />
      <Footer />
    </>
  );
};

export default Layout;
