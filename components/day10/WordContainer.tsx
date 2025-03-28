"use client";

import React, { useState } from "react";
import Search from "./Search";

import { CircularProgress, Divider, Typography } from "@mui/material";
import WordHeader from "./WordHeader";
import WordMeanings from "./WordMeanings";

export default function WordContainer() {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchForQuery = (query: string) => {
    if (!query.trim()) {
      setWordData(null);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error(data.title);
        }
        setWordData({ ...data[0] });
      })
      .catch((err) => {
        setError(err.message);
        setWordData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Search onSearch={searchForQuery} />

      {loading && (
        <CircularProgress
          sx={{ display: "block", margin: "0 auto" }}
          color="secondary"
        />
      )}
      {error && <Typography color="error">{error}</Typography>}
      {wordData && (
        <>
          <WordHeader
            word={wordData.word}
            phonetic={wordData.phonetic}
            phonetics={wordData.phonetics}
          />
          <WordMeanings meanings={wordData.meanings} />
          <Divider sx={{ mb: 2 }}></Divider>
        </>
      )}
    </>
  );
}
