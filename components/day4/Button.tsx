import React from "react";
import Button from "@mui/material/Button";
import { COLORS } from "@/styles/colors";

type CustomButtonProps = Readonly<{
  children: React.ReactNode;
}>;

export default function CustomButton({ children }: CustomButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: `${COLORS.green}`,
        color: `${COLORS.darkPurple}`,
        fontWeight: 500,
        borderRadius: 0,
        padding: "0.75rem 2rem",
      }}
    >
      {children}
    </Button>
  );
}
