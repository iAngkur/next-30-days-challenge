import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import AudioPlayer from "./AudioPlayer";

type WordHeaderProps = {
  word: string;
  phonetic: string;
  phonetics: any[];
};

export default function WordHeader({ word, phonetic, phonetics }) {
  console.log("word:: > ", word);
  console.log("phonetic:: > ", phonetic);
  console.log("phonetics:: > ", phonetics);

  const audioSrc = phonetics?.find((p) => p.auiod)?.audio;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
          {word}
        </Typography>
        <Typography variant="h5" color="#9c27b0">
          {phonetic || phonetics?.[1]?.text}
        </Typography>
      </Box>
      {audioSrc && <AudioPlayer src={audioSrc} />}
    </Box>
  );
}
