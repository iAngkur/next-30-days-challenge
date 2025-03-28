import Button from "@mui/material/Button";
import React from "react";

export default function CustomButton({ label }: { label: string }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#151515",
        fontWeight: 600,
        borderRadius: "10px",
        textTransform: "none",
        padding: "0.4rem 1rem",
        transition: "background-color 0.5s ease",
        border: "1px solid transparent",

        "&:hover, &:active": {
          backgroundColor: "transparent",
          border: "1px solid #151515",
          color: "#151515",
        },
      }}
    >
      {label}
    </Button>
  );
}
