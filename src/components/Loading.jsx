import { CircularProgress } from "@mui/material";
import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Loading = () => {
  const { height } = useWindowDimensions();
  return (
    <div
      style={{
        height: height - 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
