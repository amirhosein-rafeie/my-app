import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

import useWindowDimensions from "../hooks/useWindowDimensions";

const Page404 = () => {
  const { height } = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <div style={{ height: height - 180 }} className="not-found-container">
      <h3>Page Not Found</h3>
      <Button onClick={() => navigate("/")} variant="outlined">
        Back to home
      </Button>
    </div>
  );
};

export default Page404;
