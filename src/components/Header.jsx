import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";
import { Hidden, IconButton } from "@mui/material";
import SwipeableTemporaryDrawer from "./Drawer";

let timeout;
let scroll = 0;

const Header = () => {
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (scroll >= window.scrollY && window.scrollY > 100) {
          document.getElementById("header").classList.add("sticky");
        } else {
          document.getElementById("header").classList.remove("sticky");
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  return (
    <div id="header" className="sidebar">
      <div className="sidebar-menu">
        <div className="sidebar-menu-item" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="sidebar-menu-item" onClick={() => navigate("products")}>
          Products
        </div>
        <Hidden smUp>
          <IconButton onClick={() => setState(true)}>
            <Menu
              style={{
                width: 40,
                height: 40,
                cursor: "pointer",
                color: "#fff",
              }}
            />
          </IconButton>
        </Hidden>
        <SwipeableTemporaryDrawer state={state} setState={setState} />
      </div>
    </div>
  );
};

export default Header;
