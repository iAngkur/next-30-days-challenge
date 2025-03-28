import Hero from "@/components/day9/Hero";
import Nav from "@/components/day9/Nav";
import Box from "@mui/material/Box";
import React from "react";

export default function Home() {
  return (
    <Box
      sx={{
        flex: 1,
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F2F2F2",
        overflowX: "hidden",
      }}
    >
      <header>
        <Nav />
        <Hero />
      </header>
    </Box>
  );
}
