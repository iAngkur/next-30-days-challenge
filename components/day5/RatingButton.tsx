import Button from "@mui/material/Button";
import React from "react";

type RatingButtonProps = {
  label: number;
  value: number;
  currentRating: number;
  setCurrentRating: (value: number) => void;
};

export default function RatingButton({
  label,
  value,
  currentRating,
  setCurrentRating,
}: Readonly<RatingButtonProps>) {
  const isIncludedInRating = value <= currentRating;

  return (
    <Button
      sx={{
        padding: "1rem",
        minWidth: 0,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: isIncludedInRating ? "#FFFFFF" : "#262E38",
        color: isIncludedInRating ? "#262E38" : "#969FAD",
        transition: "background-color 0.2s ease",
        fontWeight: 600,

        "&:hover": {
          backgroundColor: "#FC7614",
          color: "#262E38",
        },
      }}
      onClick={() => setCurrentRating(value)}
    >
      {label}
    </Button>
  );
}
