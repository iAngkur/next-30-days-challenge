import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import styles from "@/styles/day4.module.css";

export default function Nav() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
      width="calc(100% - 5rem)"
    >
      <Image
        src="/assets4/images/logo-light.svg"
        alt="logo"
        width={95}
        height={25}
      />
      <Typography
        className={styles.neonUnderline}
        sx={{
          cursor: "pointer",
          transition: "all 0.3s ease",

          "&:hover": {
            textDecorationThickness: "0.25rem",
          },
        }}
      >
        Apply for access
      </Typography>
    </Box>
  );
}
