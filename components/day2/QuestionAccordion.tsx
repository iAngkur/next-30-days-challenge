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
      <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "0.5rem 1rem", margin: '1rem 0', backgroundColor: showAnswer ? "#F8EEFF" : "#FFF" }}>
        <Typography>{question}</Typography>
        <IconButton aria-label={showAnswer ? "Collapse" : "Expand"} onClick={() => { setShowAnswer(!showAnswer) }}>
          {showAnswer ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Paper>
      {showAnswer && <Container>
        <Typography variant='body1' sx={{textAlign: "justify"}}>{answer}</Typography>
      </Container>}
    </Box>
  )
}

export default QuestionAccordion