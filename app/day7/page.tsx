import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import React from "react";

export default function page() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#E6EFF5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: { xs: "2rem" },
      }}
    >
      <Paper
        sx={{
          width: { xs: "100%", sm: "500px" },
          height: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gridTemplateRows: { xs: "auto auto auto", sm: "auto 1fr" },
          gridTemplateAreas: {
            xs: `"top" "bleft" "bright"`,
            sm: `"top top" "bleft bright"`,
          },
        }}
      >
        <Box
          sx={{
            gridArea: "top",
            backgroundColor: "white",
            padding: "2rem",
            marginBottom: { xs: "1rem" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#37BDBD", marginBottom: "1rem" }}
          >
            Join our communitry
          </Typography>
          <Typography sx={{ fontWeight: "bold", color: "#BADF4E" }}>
            30-day, hassle-free money back guarantee
          </Typography>
          <Typography sx={{ color: "#D6D6DD", fontSize: "0.8rem" }}>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </Typography>
        </Box>
        <Box
          sx={{
            gridArea: "bleft",
            backgroundColor: "#00B2B1",
            padding: "2rem",
            color: "white",
          }}
        >
          <Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Monthly Subscription
          </Typography>
          <Typography sx={{ color: "#D6D6DD", fontSize: "0.75rem" }}>
            <span
              style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
            >
              $29
            </span>{" "}
            per month
          </Typography>
          <Typography sx={{ color: "#D6D6DD", fontSize: "0.75rem" }}>
            Full access for less than $1 a day
          </Typography>
          <Button
            sx={{
              backgroundColor: "#BADF4E",
              color: "white",
              boxShadow: "0 1px 4px -2px black",
              marginTop: "2rem",
            }}
            fullWidth
          >
            Sign Up
          </Button>
        </Box>
        <Box
          sx={{
            gridArea: "bright",
            backgroundColor: "#37BDBD",
            color: "white",
            padding: "2rem",
          }}
        >
          <Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Why Us
          </Typography>
          <List
            sx={{
              color: "#D6D6DD",
              fontSize: "0.75rem",
              "&>li": { padding: 0, marginBottom: "4px" },
            }}
          >
            <ListItem>Tutorials by industry experts</ListItem>
            <ListItem>Peer & expert code review</ListItem>
            <ListItem>Coding exercises</ListItem>
            <ListItem>Access to our GitHub repos</ListItem>
            <ListItem>Community forum</ListItem>
            <ListItem>Flashcard decks</ListItem>
            <ListItem>New videos every week</ListItem>
          </List>
        </Box>
      </Paper>
    </Box>
  );
}
