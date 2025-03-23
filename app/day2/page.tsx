import FAQContainer from "@/components/day2/FAQContainer";
import Box from "@mui/material/Box";
import React from "react";

export default function Day2() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8EEFF",
        padding: "2rem",
      }}
    >
      <FAQContainer />
    </Box>
  );
}
