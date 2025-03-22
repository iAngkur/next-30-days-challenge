import React from "react";
import Box from "@mui/material/Box";
import Card from "@/components/day1/Card";

export default function Day1() {
  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        color: "primary.contrastText",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card />
    </Box>
  );
}
