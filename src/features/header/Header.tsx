import {
  Box,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  Typography,
  useTheme
} from "@mui/material";
// import makeStyles from "@mui/material/styles";

import sidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import sidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";

type typeStep = {
  name: "STEP 1" | "STEP 2" | "STEP 3" | "STEP 4";
  label: "YOUR INFO" | "SELECT PLAN" | "ADD-ONS" | "SUMMARY";
};

const Header: React.FC = () => {
  const isMediumScreen = useMediaQuery("(min-width:960px)");

  const theme=useTheme();
//   const primary=theme.palette.Primary;
  const neutral=theme.palette.neutral;

  
  
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
        backgroundSize:{md:"contain"},
        justifyContent: "center",
        height: { xs: "7.5rem", md: "100vh" },
        width: "100%",
        p:"1.5rem",
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
        sx={{gap:{md:".7rem"},ml:{xs:"4rem",md:".3rem"}}}
    
      >
        {steps.map((step) => (
          <Step key={step.name} sx={{justifyContent:"center"}}>
            <StepLabel>
              {isMediumScreen ? (
                <Box component="div" sx={{pl:".5rem"}}>
                  <Typography component="p" variant="body2" sx={{color:neutral.CoolGray.main}}>
                    {step.name}
                  </Typography>
                  <Typography component="p" variant="body2" sx={{color:neutral.White.main}}>
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
