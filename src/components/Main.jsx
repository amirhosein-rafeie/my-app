import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  const location = useLocation();
  const { height } = useWindowDimensions();

  // console.log(location);

  return (
    <div className="app">
      <Header />
      <main style={{ minHeight: height - 180 }} className="main">
        <Outlet />
      </main>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default Main;
