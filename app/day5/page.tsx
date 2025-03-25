"use client";
import RatingsContainer from "@/components/day5/RatingsContainer";
import ThanksContainer from "@/components/day5/ThanksContainer";
import React, { useState } from "react";

export default function Home() {
  const [hasSubmitted, setHasSubmitted] = useState({
    shouldShowThanksContainer: false,
    selectedRating: 0,
  });

  const handleOnSubmit = (currentRating: number) => {
    setHasSubmitted({
      shouldShowThanksContainer: true,
      selectedRating: currentRating,
    });
  };
  return hasSubmitted.shouldShowThanksContainer ? (
    <ThanksContainer selectedRating={hasSubmitted.selectedRating} />
  ) : (
    <RatingsContainer onSubmit={handleOnSubmit} />
  );
}
