import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="app">
      <div className="sidebar">
        <Header />
      </div>
      <main className="main">
        <Outlet />
      </main>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default Main;
