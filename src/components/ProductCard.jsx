import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Comment from "@mui/icons-material/Comment";
import { useNavigate } from "react-router";
import { CardActionArea } from "@mui/material";

export default function ProductCard({
  id,
  title,
  description,
  image,
  price,
  rate,
  count,
}) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/products/${id}`)}
      sx={{
        maxWidth: 300,
        width: 300,
        height: 600,
        border: "solid 1px #505050",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          height: 300,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="product-card-image"
          style={{
            background: `url(${image}) no-repeat`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            width: "60%",
            height: "60%",
          }}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.length > 250
            ? `${description.slice(0, 250)} ...`
            : description}
        </Typography>
      </CardContent>
      <CardActionArea>
        <Typography style={{ fontWeight: "bold", color: "#377D71" }}>
          {price} $
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StarIcon
            fontSize="20"
            style={{ marginRight: 10, color: "#FBCB0A" }}
          />{" "}
          {rate}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Comment fontSize="20" style={{ marginRight: 10 }} /> {count}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
