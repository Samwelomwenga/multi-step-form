import { Typography, Stack, useTheme } from "@mui/material";

import Header from "../features/header/Header";
import FinishUp from "../features/finishUp/FinishUp";
import React from "react";

const FinishUpStep: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  return (
    <Stack
      component="main"
      direction={{ md: "row" }}
      sx={{
        bgcolor: {
          xs: neutral.LightGray.main,
          md: neutral.White.main,
        },
        pr:{
          md:"5rem"
        },
        minHeight: "100vh",
      }}
    >
      <Header />
      <Stack
        component="section"
        sx={{
          px: ".9rem",
          mx: ".6rem",
          mt: { xs: "-3rem", md: "0" },
          ml: {
            md: "-20rem",
          },
          py: "2rem",
          borderRadius: ".5rem",
          bgcolor: "white",
          width: "100%",
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          sx={{
            color: primary.MarineBlue.main,
            fontWeight: "700",
            ml: ".5rem",
          }}
        >
          Finish up
        </Typography>
        <Typography
          sx={{
            color: neutral.CoolGray.main,
            py: "1rem",
            fontWeight: "500",
            ml: ".5rem",
          }}
        >
          Double-check everything looks OK before confirming
        </Typography>
        <FinishUp />
      </Stack>
    </Stack>
  );
};

export default FinishUpStep;
