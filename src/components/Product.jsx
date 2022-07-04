import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import Comment from "@mui/icons-material/Comment";
import { Button } from "@mui/material";

import Loading from "../components/Loading";
import Counter from "./Counter";

const Product = () => {
  const [fetchInfo, setFetchInfo] = useState({
    data: null,
    loading: true,
    error: null,
  });
  const [counter, setCounter] = useState(1);

  const param = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((data) => {
        setFetchInfo((prev) => ({ ...prev, loading: false, data }));
      })
      .catch((err) =>
        setFetchInfo((prev) => ({
          ...prev,
          loading: false,
          error: err.message,
        }))
      );
  }, [param]);

  if (fetchInfo.loading) {
    return <Loading />;
  }

  if (fetchInfo.error) {
    return <p>Server Error</p>;
  }

  return (
    <div className="product-single-container">
      <div className="product-single-info-container">
        <h1>{fetchInfo.data.title}</h1>
        <h3>description</h3>
        <p>{fetchInfo.data.description}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarIcon
            fontSize="22"
            style={{ marginRight: 10, color: "#FBCB0A" }}
          />{" "}
          Rate: {fetchInfo.data.rating.rate}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Comment fontSize="22" style={{ marginRight: 10 }} /> Comment:{" "}
          {fetchInfo.data.rating.count}
        </div>
        <Counter counter={counter} setCounter={setCounter} />
        <div style={{ padding: "20px 0", height: 40 }}>
          {!!counter && (
            <Button
              onClick={() => alert(`${fetchInfo.data.price * counter} $`)}
              variant="contained"
            >
              {(fetchInfo.data.price * counter).toFixed(2)} $
            </Button>
          )}
        </div>
      </div>
      <div className="product-single-image-container">
        <div
          style={{
            background: `url(${fetchInfo.data.image}) no-repeat`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            width: "60%",
            height: "60%",
          }}
        />
      </div>
    </div>
  );
};

export default Product;
