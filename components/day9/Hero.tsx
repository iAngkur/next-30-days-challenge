import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Hero() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: "2rem",
        padding: "0 2rem",
        maxWidth: "lg",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          // height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            fontWeight: 600,
            lineHeight: "4rem",
            marginTop: "auto",
          }}
        >
          Make <br></br> remote work
        </Typography>
        <Typography
          fontSize="17.5px"
          sx={{ textWrap: "balance", marginBottom: "2rem" }}
        >
          Get your team in sync, no matter your location. Streamline processs,
          create team rituals, and watch productivity soar.
        </Typography>
        <CustomButton label="Learn more" />
        <Box
          gap="2.5rem"
          display="flex"
          justifyContent="space-between"
          marginTop="auto"
        >
          <Image
            src="/assets9/images/client-databiz.svg"
            alt="company-logo"
            height={20}
            width={82}
          />
          <Image
            src="/assets9/images/client-audiophile.svg"
            alt="company-logo"
            height={20}
            width={82}
          />
          <Image
            src="/assets9/images/client-meet.svg"
            alt="company-logo"
            height={20}
            width={82}
          />
          <Image
            src="/assets9/images/client-maker.svg"
            alt="company-logo"
            height={20}
            width={82}
          />
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Image
          src="/assets9/images/image-hero-desktop.png"
          alt="user-with-laptop"
          width={400}
          height={500}
        />
      </Box>
    </Box>
  );
}
