import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

type MenuItem = {
  icon?: string;
  label: string;
};

interface DropdownMenuProps {
  menuItems: MenuItem[];
}

export default function DropdownMenu({ menuItems }: DropdownMenuProps) {
  return (
    <Box
      sx={{
        borderRadius: "0.625rem",
        padding: "1.5rem",
        backgroundColor: "#FFFFFF",
        position: "absolute",
        top: "30px",
        right: "-20px",
        zIndex: "1",
        fontSize: "13px",
        boxShadow: "0 10px 20px -10px #000000",
      }}
    >
      {menuItems.map((item) => (
        <Typography
          key={item.label}
          sx={{
            marginBottom: "0.5rem",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
          role="button"
          onClick={() => console.log("Clicked on : ", item.label)}
        >
          {item.icon && (
            <Image src={item.icon} alt={item.label} width={12} height={12} />
          )}
          {item.label}
        </Typography>
      ))}
    </Box>
  );
}
