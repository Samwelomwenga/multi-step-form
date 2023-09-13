import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
        coolGray: PaletteColor;
        lightGray: PaletteColor;
        magnolia: PaletteColor;
        alabaster: PaletteColor;
        white: PaletteColor;
    },
    Primary: {
        marineBlue: PaletteColor;
        strawberryRed: PaletteColor;
        purplishBlue: PaletteColor;
        pastleBlue: PaletteColor;
        lightBlue: PaletteColor;
    }

  }
  interface PaletteOptions {
    neutral:{
        coolGray: PaletteColorOptions;
        lightGray: PaletteColorOptions;
        magnolia: PaletteColorOptions;
        alabaster: PaletteColorOptions;
        white: PaletteColorOptions;
    },
    Primary: {
        marineBlue: PaletteColorOptions;
        strawberryRed: PaletteColorOptions;
        purplishBlue: PaletteColorOptions;
        pastleBlue: PaletteColorOptions;
        lightBlue: PaletteColorOptions;
    }
  }

  interface Typography {
    fontFamily: string;
  }
    interface TypographyOptions {
        fontFamily: string;
    }

    
}