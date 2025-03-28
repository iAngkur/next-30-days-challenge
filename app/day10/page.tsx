import Nav from "@/components/day10/Nav";
import WordContainer from "@/components/day10/WordContainer";
import Container from "@mui/material/Container";
import React from "react";

export default function Dictionary() {
  return (
    <Container maxWidth="md">
      <Nav />
      <WordContainer />
    </Container>
  );
}
