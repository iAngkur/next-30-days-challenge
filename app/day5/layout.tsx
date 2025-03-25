import React from "react";
import Box from "@mui/material/Box";

export default function layout({ children }: { children: React.ReactNode }) {
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
      <Box
        sx={{
          width: "390px",
          height: "400px",
          backgroundColor: "#232A34",
          color: "white",
          padding: "2rem",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          borderRadius: "10px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
