import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

import bannerImage from "../assets/image/banner.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="banner-image"
      style={{
        background: `url(${bannerImage}) no-repeat center center`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        display: "flex",
        direction: "rtl",
      }}
    >
      <div className="banner-container">
        <div
          style={{
            width: 450,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Welcome to our shop</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque
          </p>
          <Button
            style={{ width: 150, height: 50, marginTop: 10 }}
            variant="contained"
            onClick={() => navigate("/products")}
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
