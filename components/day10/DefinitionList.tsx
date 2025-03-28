import { List, ListItem, Typography } from "@mui/material";
import React from "react";

export default function DefinitionList({
  definitions,
}: {
  definitions: any[];
}) {
  return (
    <List sx={{ listStyleType: "disc" }}>
      <Typography variant="h6">Meaning</Typography>
      <ListItem
        sx={{
          display: "list-item",
          pl: 0,
          marginLeft: "2rem",
          "&::marker": {
            color: "#9c27b0",
          },
        }}
      >
        <Typography>Testing</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, fontStyle: "italic" }}>
          {"example"}
        </Typography>
      </ListItem>
    </List>
  );
}
