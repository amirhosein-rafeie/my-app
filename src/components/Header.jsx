import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";
import { Hidden, IconButton } from "@mui/material";
import SwipeableTemporaryDrawer from "./Drawer";

const Header = () => {
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  return (
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
            style={{ width: 40, height: 40, cursor: "pointer", color: "#fff" }}
          />
        </IconButton>
      </Hidden>
      <SwipeableTemporaryDrawer state={state} setState={setState} />
    </div>
  );
};

export default Header;
