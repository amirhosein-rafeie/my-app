import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import ProductCard from "./ProductCard";
import Loading from "./Loading";

const Products = () => {
  const [fetchInfo, setFetchInfo] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
  }, []);

  if (fetchInfo.loading) {
    return <Loading />;
  }

  if (fetchInfo.error) {
    return <p>Server Error</p>;
  }

  return (
    <Grid container rowSpacing={2} padding="20px 0">
      {fetchInfo.data.map((product, index) => (
        <Grid
          key={product.id}
          item
          xs={12}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
            count={product.rating.count}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
