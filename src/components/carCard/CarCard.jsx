import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ carName, img }) => {
  return (
    <Card sx={{ marginBottom: 10 }}>
      <Link to={`/product/:${carName}`}>
        <img src={img} alt={`${carName}`} style={{ width: "100%" }} />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {carName}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/product/:${carName}`}>FullDetails</Link>
      </CardActions>
    </Card>
  );
};

export default CarCard;
