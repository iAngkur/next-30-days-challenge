"use client"

import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import React from 'react'
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

type QuestionAccordionProps = Readonly<{ question: string, answer: string }>;

function QuestionAccordion({ question, answer }: QuestionAccordionProps) {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <Box>
      <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "0.5rem 1rem", margin: '0.5rem 0', backgroundColor: showAnswer ? "#F8EEFF" : "#FFF" }}>
        <Typography sx={{
          fontWeight: 600,
          cursor: "pointer", marginRight: "0.5rem", "&:hover": {
            color: "#AD28E8",
          }
        }}>{question}</Typography>
        <IconButton aria-label={showAnswer ? "Collapse" : "Expand"} onClick={() => { setShowAnswer(!showAnswer) }} sx={{ backgroundColor: showAnswer ? "#301534" : "#AD28E8", padding: "0.25rem", color: "#FFF", "&:hover": {backgroundColor: "#301534"} }}>
          {showAnswer ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Paper>
      {showAnswer && <Container>
        <Typography variant='body1' sx={{ textAlign: "justify", color: "#886990", }}>{answer}</Typography>
      </Container>}
    </Box>
  )
}

export default QuestionAccordion