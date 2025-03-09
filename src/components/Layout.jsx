import React from "react";
import Navbar from "./Navbar";
import Footer from "../components_team/Footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
