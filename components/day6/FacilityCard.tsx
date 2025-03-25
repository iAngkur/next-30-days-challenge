import { Facility } from "@/app/day6/page";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import { transparentWhite, veryLightGray } from "@/public/assets6/colors";
import { Big_Shoulders_Display } from "next/font/google";

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: "700",
});

interface FacilityCardProps {
  facility: Facility;
}

export default function FacilityCard({
  facility: { image, title, description, bgColor },
}: Readonly<FacilityCardProps>) {
  return (
    <Box
      sx={{
        maxWidth: 220,
        height: 350,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: bgColor,
      }}
    >
      <Image src={image} height="35" width="55" alt={`${title} car`} />
      <Typography
        variant="h1"
        sx={{
          marginBlock: "1rem 0.5rem",
          fontSize: "28px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontWeight: 600,
          color: veryLightGray,
          fontFamily: bigShouldersDisplay.style.fontFamily,
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: "12px", color: transparentWhite }}>
        {description}
      </Typography>
      <Button
        sx={{
          marginTop: "2rem",
          alignSelf: "flex-start",
          backgroundColor: veryLightGray,
          color: bgColor,
          textTransform: "capitalize",
          borderRadius: "20px",
          fontWeight: 500,
          fontSize: "13px",
        }}
        variant="contained"
        disableElevation
      >
        Learn more
      </Button>
    </Box>
  );
}
