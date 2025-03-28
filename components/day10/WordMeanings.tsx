import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import DefinitionList from "./DefinitionList";

interface WordMeaningsProps {
  meanings: any[];
}

export default function WordMeanings({ meanings }: WordMeaningsProps) {
  return (
    <>
      {meanings.map((meaning: any, index: number) => (
        <Box key={index}>
          <Divider
            textAlign="left"
            sx={{
              mb: "1rem",
              mt: "1.5rem",
              "&::before": {
                display: "none",
              },
              "&::after": {
                width: "100%",
              },
              "& span": {
                paddingLeft: 0,
              },
            }}
          >
            <Typography variant="h6" component="span">
              {meaning.partOfSpeech}
            </Typography>
          </Divider>
          <DefinitionList definitions={meaning.definitions} />
        </Box>
      ))}
    </>
  );
}
