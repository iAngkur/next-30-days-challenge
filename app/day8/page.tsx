"use client";

import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export default function page() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#202632",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "350px",
          height: "200px",
          bgcolor: "#303A48",
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
          textAlign: "center",
          position: "relative",

          "&::after, &::before": {
            pointerEvents: "none",
          },
          "&:hover": { cursor: "pointer" },

          "&::before": {
            content: '""',
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            width: "30px",
            height: "30px",
            padding: "5px",
            transform: "translateX(-50%)",
            backgroundColor: "#2BFBB5",
            borderRadius: "50%",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            width: "10px",
            height: "10px",
            padding: "2px",
            transform: "translateX(-50%)",
            backgroundColor: "black",
            borderRadius: "2px",
          },
        }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          // Check if click was in the lower area (where pseudo-elements are)
          if (e.clientY > rect.bottom - 40) {
            console.log("Clicked on the circle");
          }
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            color: "#2BFBB5",
          }}
        >
          ADVICE #117
        </Typography>
        <Typography
          sx={{
            fontSize: "1em",
            color: "#C0D1DB",
            mt: 1,
            p: 1,
          }}
        >
          "The only way to do great work is to love what you do."
        </Typography>
        <Divider
          sx={{
            marginBlock: "2rem",
            "&::after, &::before": {
              borderTopColor: "#C0D1DB30",
            },
          }}
        >
          <Box
            sx={{
              width: "14px",
              height: "10px",
              backgroundColor: "#303A48",
              borderInline: "4px solid white",
              borderRadius: "10%",
            }}
          ></Box>
        </Divider>
      </Box>
    </Box>
  );
}
