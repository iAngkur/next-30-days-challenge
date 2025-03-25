import React from "react";
import RatingButton from "./RatingButton";
import Box from "@mui/material/Box";

const ratings = [1, 2, 3, 4, 5];

export default function Ratings() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "1.5rem",
        gap: "0.5rem",
        
      }}
    >
      {ratings.map((rating) => (
        <RatingButton key={rating} label={rating} />
      ))}
    </Box>
  );
}
