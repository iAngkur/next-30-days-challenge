"use client";

import { Button, CircularProgress, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState<{ id: number; advice: string }>({
    id: 0,
    advice: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewAdvice = () => {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice({ ...data?.slip }))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const handleOnNewAdvice = () => {
    fetchNewAdvice();
  };

  useEffect(() => {
    fetchNewAdvice();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#202632",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "350px",
          height: "auto",
          bgcolor: "#303A48",
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            color: "#2BFBB5",
          }}
        >
          ADVICE #{advice?.id}
        </Typography>
        <Typography
          sx={{
            fontSize: "1em",
            color: "#C0D1DB",
            mt: 1,
            p: 1,
          }}
        >
          {isLoading ? <CircularProgress color="inherit" /> : advice?.advice}
        </Typography>
        <Divider
          sx={{
            marginBlock: "2rem",
            "&::after, &::before": {
              borderTopColor: "#C0D1DB30",
            },
          }}
        >
          <Box
            sx={{
              width: "14px",
              height: "10px",
              backgroundColor: "#303A48",
              borderInline: "4px solid white",
              borderRadius: "10%",
            }}
          ></Box>
        </Divider>
        <Button
          onClick={handleOnNewAdvice}
          sx={{
            content: '""',
            position: "absolute",
            bottom: "-30px",
            left: "50%",
            width: "60px",
            height: "60px",
            transform: "translateX(-50%)",
            backgroundColor: "#2BFBB5",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            padding: 0,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              height: "22px",
              width: "22px",
              background: "black",
              borderRadius: "5px",
              position: "relative",
              padding: 0,

              "&::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#2BFBB5",
                width: "4px",
                height: "4px",
                borderRadius: "50%",

                boxShadow:
                  "5px 5px 0px 0px #2BFBB5, -5px -5px 0px 0px #2BFBB5, -5px 5px 0px 0px #2BFBB5, 5px -5px 0px 0px #2BFBB5",
              },
            }}
          ></Box>
        </Button>
      </Box>
    </Box>
  );
}
