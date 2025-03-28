import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Dropdown from "./Dropdown";
import CustomButton from "./CustomButton";

const features = [
  { icon: "assets9/images/icon-todo.svg", label: "Todo List" },
  { icon: "assets9/images/icon-calendar.svg", label: "Calendar" },
  { icon: "assets9/images/icon-reminders.svg", label: "Reminders" },
  { icon: "assets9/images/icon-planning.svg", label: "Planning" },
];

const companies = [
  { label: "History" },
  { label: "Our Team" },
  { label: "Blog" },
];

export default function Nav() {
  return (
    <nav
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
    >
      <Box sx={{ display: "inline-flex", alignItems: "center", gap: "1.5rem" }}>
        <Image
          src="/assets9/images/logo.svg"
          alt="Logo"
          height={35}
          width={87}
          style={{ marginRight: "1.5rem" }}
        />
        <Dropdown label="Features" menuItems={features} />
        <Dropdown label="Company" menuItems={companies} />
        <Typography>Career</Typography>
        <Typography>About</Typography>
      </Box>
      <Box sx={{ display: "inline-flex", alignItems: "center", gap: "1rem" }}>
        <Typography>Login</Typography>
        <CustomButton label="Register" />
      </Box>
    </nav>
  );
}
