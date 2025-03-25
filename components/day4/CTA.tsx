import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";
import Button from "./Button";

export default function CTA() {
  return (
    <Box sx={{ height: "400px" }}>
      <Container
        sx={{
          position: "relative",
          maxWidth: "980px",
          height: "100%",
          marginInline: "auto",
        }}
      >
        <Image
          src="/assets4/images/image-founder.webp"
          alt="founder-image"
          width={350}
          height={350}
        />
        <Box
          sx={{
            width: "37.5rem",
            backgroundColor: COLORS.darkPurple,
            color: COLORS.white,
            padding: "2rem",
            position: "absolute",
            top: "68%",
            left: "68%",
            transform: "translate(-55%, -55%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "3.5rem", fontFamily: "serif" }}
          >
            Be the first to test
          </Typography>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
          <Button>Apply for access</Button>
        </Box>
        <Image
          src="/assets4/images/bg-pattern-2.svg"
          alt="decorative-squiggle"
          height={110}
          width={200}
          style={{
            position: "absolute",
            right: "160px",
            bottom: "-1.5rem",
            transform: "rotate(-90deg)",
          }}
        />
      </Container>
    </Box>
  );
}
