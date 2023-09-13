import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    neutral: {
      coolGray: {
        main: "hsl(231, 11%, 63%)",
      },
      lightGray: {
        main: "hsl(229, 24%, 87%)",
      },
      magnolia: {
        main: "hsl(217, 100%, 97%)",
      },
      alabaster: {
        main: "hsl(231, 100%, 99%)",
      },
      white: {
        main: "hsl(0, 0%, 100%)",
      },
    },
    Primary: {
        marineBlue: {
          main: "hsl(213, 96%, 18%)",
          light: "hsl(213, 96%, 25%)",
        },
        strawberryRed: {
            main: "hsl(354, 84%, 57%)",
          },
          purplishBlue: {
            main: "hsl(243, 100%, 62%)",
            light: "hsl(243, 100%, 62%,0.15)",
            
          },
          pastleBlue: {
            main: "hsl(228, 100%, 84%)",
          },
          lightBlue: {
            main: "hsl(206, 94%, 87%)",
          },
    
  },
},
typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
  },});

export default theme;
