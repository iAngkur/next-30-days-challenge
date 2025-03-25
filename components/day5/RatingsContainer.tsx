import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Ratings from "./Ratings";
import Button from "@mui/material/Button";

function RatingsContainer() {
  return (
    <Box
      sx={{
        width: "350px",
        height: "400px",
        backgroundColor: "#181E27",
        color: "white",
        padding: "2rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#262E38",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets5/images/icon-star.svg"
          alt="star logo"
          width={16}
          height={16}
        />
      </Box>

      <Typography
        sx={{ fontSize: "2rem", fontWeight: 600, marginTop: "1.5rem" }}
      >
        How did we do?
      </Typography>
      <Typography
        sx={{ fontSize: "13px", lineHeight: "1.5", color: "#969FAD" }}
      >
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Typography>
      <Ratings />
      <Button
        sx={{
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          width: "100%",
          marginTop: "1rem",
          backgroundColor: "#2F80ED",
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default RatingsContainer;
