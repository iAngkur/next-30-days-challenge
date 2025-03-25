import FacilityCard from "@/components/day6/FacilityCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Lexend_Deca } from "next/font/google";
import React from "react";
import { brightOrange, darkCyan, veryDarkCyan } from "@/public/assets6/colors";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: "400",
});

export type Facility = {
  image: string;
  title: string;
  description: string;
  bgColor: string;
};

const facilities: Facility[] = [
  {
    image: "/assets6/images/icon-sedans.svg",
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    bgColor: brightOrange,
  },
  {
    image: "/assets6/images/icon-suvs.svg",
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    bgColor: darkCyan,
  },
  {
    image: "/assets6/images/icon-luxury.svg",
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bgColor: veryDarkCyan,
  },
];

export default function Home() {
   return (
    <Box
      sx={{
        fontFamily: lexendDeca.style.fontFamily,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",

          "@media(max-width: 575px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {facilities.map((facility) => (
          <FacilityCard key={facility.title} facility={facility} />
        ))}
      </Container>
    </Box>
  );
}
