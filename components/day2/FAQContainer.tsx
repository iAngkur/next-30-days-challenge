import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import React from 'react'
import QuestionAccordion from './QuestionAccordion'
import Image from 'next/image'

function FAQContainer() {

    const faqs = [
        {
            question: "What is Frontend Mentor, and how will it help me?",
            answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            question: "Is Frontend Mentor free?",
            answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        },
        {
            question: "Can I use Frontend Mentor projects in my portfolio?",
            answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        },
        {
            question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        },
    ]
    return (
        <Paper sx={{ display: "flex", flexDirection: "column", backgroundColor: "#FFF", padding: "2rem", minHeight: "auto", maxWidth: "25rem", margin: "2rem auto" }}>
            <Image src="/assets2/images/icon-star.svg" alt="FAQs" width={1440} height={320} />
            <Typography variant='h3'>FAQs</Typography>
            {faqs.map(({ question, answer }) => (
              <QuestionAccordion key={question} question={question} answer={answer} />
            ))}
        </Paper>
    )
}

export default FAQContainer;
