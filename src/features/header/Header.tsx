import {
  Box,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import sidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import sidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";

type typeStep = {
  name: "STEP 1" | "STEP 2" | "STEP 3" | "STEP 4";
  label: "YOUR INFO" | "SELECT PLAN" | "ADD-ONS" | "SUMMARY";
};

const Header: React.FC = () => {
  const isMediumScreen = useMediaQuery("(min-width:960px)");

  const theme = useTheme();
  const neutral = theme.palette.neutral;
  const primary = theme.palette.Primary;

  const activeStep = useSelector((state: RootState) => state.header.activeStep);

  const steps: typeStep[] = [
    {
      name: "STEP 1",
      label: "YOUR INFO",
    },
    {
      name: "STEP 2",
      label: "SELECT PLAN",
    },
    {
      name: "STEP 3",
      label: "ADD-ONS",
    },
    {
      name: "STEP 4",
      label: "SUMMARY",
    },
  ];

  return (
    <Box
      component="header"
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: { md: "contain" },
        justifyContent: "center",
        height: { xs: "7.5rem", md: "100vh" },
        width: "100%",
        p: "1.5rem",
        backgroundImage: {
          xs: `url(${sidebarMobile})`,
          md: `url(${sidebarDesktop})`,
        },
      }}
    >
      <Stepper
        activeStep={activeStep}
        nonLinear
        connector={null}
        orientation={isMediumScreen ? "vertical" : "horizontal"}
        sx={{ gap: { md: ".7rem" }, ml: { xs: "4rem", md: ".3rem" } }}
      >
        {steps.map((step) => (
          <Step key={step.name} sx={{ justifyContent: "center" }}>
            <StepLabel
              sx={{
                "& .MuiSvgIcon-root": {
                  width: "1.7rem",
                  height: "1.7rem",
                  color: "transparent",
                  border: "1.7px solid",
                  borderColor: neutral.lightGray.main,
                  borderRadius: "50%",
                },
                "& .MuiStepIcon-text": {
                  fill: neutral.white.main,
                  fontWeight: 500,
                },
                " & .Mui-active": { 
                  "& .MuiSvgIcon-root": {
                    color: primary.lightBlue.main,
                    border:"none",
                  },
                  "& .MuiStepIcon-text": {
                    fill: primary.marineBlue.main,
                  },
                  
                 },
              }}
            >
              {isMediumScreen ? (
                <Box component="div" sx={{ pl: ".5rem" }}>
                  <Typography
                    component="p"
                    variant="body2"
                    sx={{ color: neutral.coolGray.main }}
                  >
                    {step.name}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    sx={{ color: neutral.white.main }}
                  >
                    {step.label}
                  </Typography>
                </Box>
              ) : (
                ""
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Header;
