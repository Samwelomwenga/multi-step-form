import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    neutral: {
      CoolGray: {
        main: "hsl(231, 11%, 63%)",
      },
      LightGray: {
        main: "hsl(229, 24%, 87%)",
      },
      Magnolia: {
        main: "hsl(217, 100%, 97%)",
      },
      Alabaster: {
        main: "hsl(231, 100%, 99%)",
      },
      White: {
        main: "hsl(0, 0%, 100%)",
      },
    },
    Primary: {
        MarineBlue: {
          main: "hsl(213, 96%, 18%)",
        },
        StrawberryRed: {
            main: "hsl(354, 84%, 57%)",
          },
          PurplishBlue: {
            main: "hsl(243, 100%, 62%)",
          },
          PastleBlue: {
            main: "hsl(228, 100%, 84%)",
          },
          LightBlue: {
            main: "hsl(206, 94%, 87%)",
          },
    
  },
}});

export default theme;
