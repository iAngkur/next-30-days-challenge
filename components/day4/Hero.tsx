import React from "react";

import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import Nav from "./Nav";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styles from "@/styles/day4.module.css";
import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.darkPurple,
        color: COLORS.white,
        minHeight: "85vh",
        borderRadius: "0% 0% 50% 50% / 0% 0% 10% 10%;",
      }}
    >
      <Container
        sx={{
          padding: "2rem 3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Nav />
        <Typography
          variant="h1"
          fontSize="5rem"
          fontFamily="serif"
          maxWidth="36rem"
          textAlign="center"
          marginBlock="3rem"
          lineHeight={0.93}
        >
          Data <span className={styles.neonUnderline}>tailored</span> to your
          needs
        </Typography>
        <Button>Learn more</Button>
        <Image
          src="/assets4/images/bg-pattern-1.svg"
          alt="decorative-squiggle"
          height={250}
          width={300}
          style={{
            position: "absolute",
            left: "-122px",
            top: "110px",
          }}
        />
        <Image
          src="/assets4/images/bg-pattern-2.svg"
          alt="decorative-squiggle"
          height={110}
          width={200}
          style={{
            position: "absolute",
            right: "-88px",
            top: "250px",
          }}
        />
        <Image
          src="/assets4/images/image-hero.webp"
          alt="iphone"
          height={250}
          width={400}
          style={{
            position: "absolute",
            left: "55%",
            bottom: "-250px",
            transform: "translateX(-50%)",
            zIndex: "5",
          }}
        />
      </Container>
    </Box>
  );
}
