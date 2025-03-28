import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, FormControlLabel, FormGroup, Switch } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <Box
      sx={{
        padding: "2rem 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image src="assets10/images/logo.svg" alt="logo" width={25} height={25} />

      <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Box>
          <Button
            sx={{
              color: "gray",
              border: "none",
              textTransform: "none",
            }}
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Serif
          </Button>
        </Box>
        <Box
          style={{
            width: "1px",
            height: "1rem",
            backgroundColor: "#C1C1C1",
          }}
        ></Box>
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            label={
              <Image
                src="/assets10/images/icon-moon.svg"
                alt="moon-icon"
                width={25}
                height={25}
              />
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
}
