import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
