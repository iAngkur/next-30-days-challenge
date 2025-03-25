import Button from "@mui/material/Button";
import React from "react";

type RatingButtonProps = Readonly<{
  label: number;
}>;

export default function RatingButton({ label }: RatingButtonProps) {
  return (
    <Button
      sx={{
        padding: "1rem",
        minWidth: 0,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#262E38",
        color: "white",
      }}
    >
      {label}
    </Button>
  );
}
