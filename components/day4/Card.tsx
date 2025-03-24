import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "@/styles/colors";

interface CardProps {
  seqNo: number;
  title: string;
  description: string;
}

export default function Card({
  seqNo,
  title,
  description,
}: Readonly<CardProps>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: `${COLORS.darkPurple}`,
        width: "27%",
        textAlign: "center",
        gap: "1rem",
        padding: "0.5rem",
      }}
    >
      <Typography
        sx={{
          width: "2rem",
          height: "2rem",
          border: `1px solid ${COLORS.lightPurple}`,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          lineHeight: "2rem",
          marginBottom: "1rem",
          fontFamily: "serif",
        }}
      >
        {seqNo}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, fontSize: "22px", fontFamily: "serif" }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: `${COLORS.lightPurple}`, fontSize: "12px", lineHeight: "1.7" }}>
        {description}
      </Typography>
    </Box>
  );
}
