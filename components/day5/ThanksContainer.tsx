import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";

export default function ThanksContainer({
  selectedRating,
}: Readonly<{
  selectedRating: number;
}>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets5/images/illustration-thank-you.svg"
          alt="receipt"
          width={96}
          height={60}
        />
      </Box>
      <Typography
        sx={{
          padding: "0.5rem 1rem",
          borderRadius: "20px",
          fontWeight: 600,
          marginTop: "1rem",
          backgroundColor: "#262E38",
          color: "#FC7614",
          border: "1px solid rgb(35, 38, 43)",
        }}
      >
        You selected {selectedRating} out of 5
      </Typography>
      <Typography
        sx={{
          fontSize: "2rem",
          color: "white",
          fontWeight: 600,
          marginBlock: "1rem",
          fontFamily: "serif",
        }}
      >
        Thank you!
      </Typography>
      <Typography
        sx={{
          lineHeight: "1.8",
          color: "#969FAD",
          fontFamily: "sans-serif",
        }}
      >
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </Typography>
    </Box>
  );
}
