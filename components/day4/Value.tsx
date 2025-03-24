import React from "react";
import Card from "./Card";
import Container from "@mui/material/Container";
import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";

const values = [
  {
    seqNo: 1,
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    seqNo: 2,
    title: "Data-driven decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    seqNo: 3,
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];
export default function Value() {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.extraLightPurple,
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "-50px",
        zIndex: "-1",
      }}
    >
      <Container
        sx={{
          marginTop: "10rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {values.map(({ seqNo, title, description }) => (
          <Card
            key={seqNo}
            seqNo={seqNo}
            title={title}
            description={description}
          />
        ))}
      </Container>
    </Box>
  );
}
