"use client";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlined from "@mui/icons-material/KeyboardArrowUpOutlined";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

type MenuItem = {
  icon?: string;
  label: string;
};

export default function DropdownMenuItem({
  label,
  menuItems,
}: Readonly<{
  label: string;
  menuItems: MenuItem[];
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Typography
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        padding: "0.5rem 0.8rem",
      }}
    >
      {label} {isOpen ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDown />}
      {isOpen && <DropdownMenu menuItems={menuItems} />}
    </Typography>
  );
}
