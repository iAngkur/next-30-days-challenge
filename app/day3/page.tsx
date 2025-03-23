import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Email from "@/components/day3/Email";

export default function Day3() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Image
        src="/assets3/images/logo.svg"
        alt="Logo"
        width={90}
        height={29}
        style={{ margin: "2.5rem 0" }}
      />
      <Typography
        variant="h1"
        sx={{
          fontWeight: 400,
          color: "#969696",
          fontSize: "3em",
        }}
      >
        We are launching{" "}
        <span style={{ fontWeight: 600, color: "#15202A" }}>soon!</span>
      </Typography>
      <Typography
        sx={{
          fontWeight: "1.25rem",
          color: "#15202A",
          marginBlock: "2rem",
        }}
      >
        Subscribe and get notified
      </Typography>
      <Email />
      <Image
        src="/assets3/images/illustration-dashboard.png"
        alt="dashboard"
        width={640}
        height={383}
      />
    </Box>
  );
}
