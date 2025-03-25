import RatingsContainer from "@/components/day5/RatingsContainer";
import Box from "@mui/material/Box";
import React from "react";

export default function page() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#1E1E1E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RatingsContainer />
    </Box>
  );
}
