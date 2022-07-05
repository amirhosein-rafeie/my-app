import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import Comment from "@mui/icons-material/Comment";
import { Button, Hidden, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Loading from "../components/Loading";
import Counter from "./Counter";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Product = () => {
  const [fetchInfo, setFetchInfo] = useState({
    data: null,
    loading: true,
    error: null,
  });
  const [counter, setCounter] = useState(1);
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();

  const param = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data?.status) {
          setFetchInfo((prev) => ({
            ...prev,
            loading: false,
            error: data?.message ?? "product isn't valid",
          }));
        } else {
          setFetchInfo((prev) => ({ ...prev, loading: false, data }));
        }
      })
      .catch((err) => {
        console.log(err);
        setFetchInfo((prev) => ({
          ...prev,
          loading: false,
          error: err,
        }));
      });
  }, [param]);

  if (fetchInfo.loading) {
    return <Loading />;
  }

  if (fetchInfo.error || !fetchInfo.data) {
    return <p>{fetchInfo.error}</p>;
  }

  console.log(fetchInfo);

  return (
    <div
      style={{ minHeight: height - width <= 600 ? 130 : 180 }}
      className="product-single-container"
    >
      <div className="product-single-info-container">
        <Hidden smDown>
          <IconButton
            onClick={() => navigate("/products")}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Hidden>
        <h1>{fetchInfo.data.title}</h1>
        <div>
          <h3>description</h3>
          <hr />
          <p>{fetchInfo.data.description}</p>
          <hr />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <StarIcon
            fontSize="22"
            style={{ marginRight: 10, color: "#FBCB0A" }}
          />
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
