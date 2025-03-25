import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import RatingButtons from "./RatingButtons";

type RatingButtonsContainerProps = {
  onSubmit: (currentRating: number) => void;
};

function RatingButtonsContainer({
  onSubmit,
}: Readonly<RatingButtonsContainerProps>) {
  return (
    <>
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
      <RatingButtons
        onSubmit={onSubmit}
      />
    </>
  );
}

export default RatingButtonsContainer;
