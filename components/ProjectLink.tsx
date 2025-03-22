import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function ProjectLink({
  label,
  link,
}: {
  label: string;
  link: string;
}) {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "primary.main",
        flex: "1 0 15%",
        maxWidth: "15%",
        textAlign: "center",
        transition: "background-color 0.3s",

        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      <Link
        href={link}
        style={{ display: "inline-block", padding: "1rem", width: "100%" }}
      >
        {label}
      </Link>
    </Box>
  );
}
