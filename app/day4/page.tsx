import Cta from "@/components/day4/CTA";
import Hero from "@/components/day4/Hero";
import Value from "@/components/day4/Value";
import Box from "@mui/material/Box";
import React from "react";

export default function page() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Hero />
      <Value />
      <Cta />
    </Box>
  );
}
