import { Paper } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function SocialLink({
  label,
  link,
}: Readonly<{
  label: string;
  link: string;
}>) {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        cursor: "pointer",
        backgroundColor: "#333333",
        transition: "background-color 0.3s ease",
        color: "unset",

        "&:hover": {
          backgroundColor: "#ffffff0e",
        },
      }}
    >
      <Link href={link} target="_blank">
        {label}
      </Link>
    </Paper>
  );
}
