import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
        CoolGray: PaletteColor;
        LightGray: PaletteColor;
        Magnolia: PaletteColor;
        Alabaster: PaletteColor;
        White: PaletteColor;
    },
    Primary: {
        MarineBlue: PaletteColor;
        StrawberryRed: PaletteColor;
        PurplishBlue: PaletteColor;
        PastleBlue: PaletteColor;
        LightBlue: PaletteColor;
    }

  }
  interface PaletteOptions {
    neutral:{
        CoolGray: PaletteColorOptions;
        LightGray: PaletteColorOptions;
        Magnolia: PaletteColorOptions;
        Alabaster: PaletteColorOptions;
        White: PaletteColorOptions;
    },
    Primary: {
        MarineBlue: PaletteColorOptions;
        StrawberryRed: PaletteColorOptions;
        PurplishBlue: PaletteColorOptions;
        PastleBlue: PaletteColorOptions;
        LightBlue: PaletteColorOptions;
    }
  }
}