import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Body />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
