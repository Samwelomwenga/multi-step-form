import {
  Box,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  Typography,
} from "@mui/material";

import sidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import sidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";

type typeStep = {
  name: "STEP 1" | "STEP 2" | "STEP 3" | "STEP 4";
  label: "YOUR INFO" | "SELECT PLAN" | "ADD-ONS" | "SUMMARY";
};

const Header: React.FC = () => {
  const isMediumScreen = useMediaQuery("(min-width:960px)");

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
        justifyContent: "center",
        height: { xs: "7.5rem", md: "100vh" },
        width: "100%",
        backgroundImage: {
          xs: `url(${sidebarMobile})`,
          md: `url(${sidebarDesktop})`,
        },
      }}
    >
      <Stepper
        activeStep={0}
        nonLinear
        connector={null}
        orientation={isMediumScreen ? "vertical" : "horizontal"}
      >
        {steps.map((step) => (
          <Step key={step.name}>
            <StepLabel>
              {isMediumScreen ? (
                <Box component="div">
                  <Typography component="p" variant="body2">
                    {step.name}
                  </Typography>
                  <Typography component="p" variant="body2">
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
