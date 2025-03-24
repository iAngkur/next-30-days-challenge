import Hero from "@/components/day4/Hero";
import Value from "@/components/day4/Value";
import Box from "@mui/material/Box";
import React from "react";

export default function page() {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%" }}>
      <Hero />
      <Value />
    </Box>
  );
}
