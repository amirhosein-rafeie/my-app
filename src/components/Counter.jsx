import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

const Counter = ({ counter, setCounter }) => {
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="counter-container">
      <Button
        disabled={counter < 2}
        onClick={decrement}
        variant="outlined"
        style={{ width: 10, height: 30 }}
      >
        <RemoveIcon />
      </Button>
      <p>{counter}</p>
      <Button
        onClick={increment}
        variant="outlined"
        style={{ width: 10, height: 30 }}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default Counter;
