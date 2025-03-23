"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const isEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function Email() {
  const [isValid, setIsValid] = useState<boolean>(true);

  const validator = (email: string) => {
    const isValidEmail = isEmail(email);

    if (isValidEmail) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <Box
      sx={{
        marginBottom: "5rem",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Box>
        <Input
          placeholder="Your email address..."
          sx={{
            border: `1px solid  ${isValid ? "#B8C7ED" : "#FF5466"}`,
            borderRadius: "2rem",
            padding: "0.5rem 1rem",
            color: "#B8C7ED",
            width: "26.3125rem",

            "&::before, &::after": {
              display: "none",
            },
            "&:focus-within": {
              borderColor: `${isValid ? "#4C7BF3" : "#FF5466"}`,
            },
          }}
          onChange={(e) => validator(e.target.value)}
          onBlur={(e) => {
            if (!e.target.value) {
              setIsValid(true);
            }
          }}
        />
        {!isValid && (
          <Typography sx={{ color: "#FF5466", marginLeft: "1rem" }}>
            Invalid email
          </Typography>
        )}
      </Box>
      <Button
        sx={{
          backgroundColor: "#4C7BF3",
          color: "#FFFFFF",
          borderRadius: "2rem",
          padding: "0.5rem 1rem",
          width: "12.5rem",
          height: "3.5rem",
          transform: "upercase",
          transition: "background-color 0.3s ease",

          "&:hover, &:focus": {
            backgroundColor: "#4C8BE3",
          },
        }}
      >
        Notify Me
      </Button>
    </Box>
  );
}
