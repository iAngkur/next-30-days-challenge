"use client";

import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import React, { ChangeEvent, useRef } from "react";

export default function Search({
  onSearch,
}: Readonly<{
  onSearch: (query: string) => void;
}>) {
  const timerRef = useRef<NodeJS.Timeout>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (timerRef?.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      onSearch(value);
    }, 300);
  };
  return (
    <TextField
      onChange={handleSearch}
      fullWidth
      placeholder="Search"
      sx={{
        mb: 4,

        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          backgroundColor: "#F4f4f4",
          height: "2.5rem",
          fontSize: "14px",
          fontWeight: 600,
          
          "& fieldset": {
            border: "none",
          },

          "&.Mui-focused fieldset": {
            border: "none",
            boxShadow: "none",
          },
        },
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon
                sx={{
                  color: "#9c27b0",
                }}
              />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
