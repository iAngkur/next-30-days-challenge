import React from "react";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SocialLink from "./SocialLink";

const socialLinks = [
  { linkTitle: "Github", link: "https://github.com" },
  { linkTitle: "Frontend Mentor", link: "https://frontendmentor.com" },
  { linkTitle: "LinkedIn", link: "https://linkedin.com" },
  { linkTitle: "Twitter", link: "https://twitter.com" },
  { linkTitle: "Instagram", link: "https://instagram.com" },
];

export default function Card() {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "#1f1f1f",
        width: "300px",
        height: "auto",
        borderRadius: "10px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#e1e1e1",
      }}
    >
      <Avatar
        sx={{
          width: 80,
          height: 80,
          margin: "0 auto 1rem",
          position: "relative",
        }}
      >
        <Image
          src="/assets1/images/avatar-jessica.jpeg"
          alt="Profile image"
          width={80}
          height={80}
          style={{
            objectFit: "cover",
          }}
        />
      </Avatar>
      <Typography variant="h1" style={{ fontSize: "1.5em" }}>
        Jessica Randall
      </Typography>
      <Typography
        variant="h2"
        style={{ fontSize: "1em", color: " #c4f82a", fontWeight: 600 }}
      >
        London, United Kingdom
      </Typography>
      <Typography style={{ fontSize: "0.8em", marginBlock: "1.5rem" }}>
        &quot;Front-end developer and avid reader.&quot;
      </Typography>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          fontSize: "14px",
        }}
      >
        {socialLinks.map(({ linkTitle, link }) => (
          <SocialLink key={linkTitle} label={linkTitle} link={link} />
        ))}
      </Box>
    </Paper>
  );
}
