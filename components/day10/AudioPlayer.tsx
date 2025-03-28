import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";

export default function AudioPlayer({ src }: { src: string }) {
  return (
    <IconButton
      aria-label="play-icon"
      sx={{
        backgroundColor: "#9c27b030",
        "&:hover, &:focus": {
          backgroundColor: "#9c27b040",
        },
      }}
    >
      <PlayArrowIcon color="secondary" />
    </IconButton>
  );
}
