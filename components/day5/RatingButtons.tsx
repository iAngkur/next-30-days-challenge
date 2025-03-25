"use client";
import React, { useState } from "react";
import RatingButton from "./RatingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type RatingButtonsProps = {
  onSubmit: (currentRating: number) => void;
};

const ratings = [1, 2, 3, 4, 5];

export default function RatingButtons({
  onSubmit,
}: Readonly<RatingButtonsProps>) {
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1.5rem",
          gap: "0.5rem",
        }}
      >
        {ratings.map((rating) => (
          <RatingButton
            key={rating}
            label={rating}
            value={rating}
            currentRating={currentRating}
            setCurrentRating={setCurrentRating}
          />
        ))}
      </Box>
      <Button
        sx={{
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          width: "100%",
          marginTop: "1rem",
          backgroundColor: "#FC7614",
          color: "#131518",
          fontWeight: 600,
          borderRadius: "1.25rem",

          "&:active": {
            backgroundColor: "white",
          },
        }}
        onClick={() => {
          if (currentRating <= 0) return;
          onSubmit(currentRating);
        }}
      >
        Submit
      </Button>
    </>
  );
}
