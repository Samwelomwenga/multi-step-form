import { Stack, Box, Typography, useTheme } from "@mui/material";

import Header from "../features/header/Header";
import PickAddOns from "../features/PickAddOns/PickAddOns";
const PickAddOnsStep: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  return (
    <Stack
      component="main"
      spacing={{ md: 0 }}
      sx={{
        backgroundColor: { xs: neutral.lightGray.main, md: neutral.white.main },
        height: "100vh",
        pr: {
          md: "5rem",
        },
      }}
      direction={{ md: "row" }}
    >
      <Header />
      <Box sx={{ width: "100%" }}>
        <Stack
          component="section"
          mx={2}
          sx={{
            backgroundColor: neutral.white.main,
            borderRadius: "3%",
            mt: { xs: "-3rem", md: "0" },
            px: "1rem",
            py: "2rem",
            opacity: "20",
            ml: {
              md: "-12rem",
            },
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            my={2}
            sx={{ color: primary.marineBlue.main, fontWeight: "700" }}
          >
            Pick adds-ons
          </Typography>
          <Typography
            component="p"
            variant="body1"
            mb={2}
            sx={{ color: neutral.coolGray.main }}
          >
            Add-ons help enhance your gaming experience
          </Typography>
          <PickAddOns />
        </Stack>
      </Box>
    </Stack>
  );
};

export default PickAddOnsStep;
