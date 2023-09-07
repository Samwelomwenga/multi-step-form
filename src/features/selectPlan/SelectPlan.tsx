import {
  Stack,
  Typography,
  Switch,
  RadioGroup,
  Radio,
  FormControlLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvanceIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";

import Buttons from "../../componets/Buttons";

interface plansInterface {
  name: "Arcade" | "Advance" | "Pro";
  icon: JSX.Element;
}
const SelectPlan: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;

  const isMediumScreen = useMediaQuery("(min-width:960px)");

  const plans: plansInterface[] = [
    {
      name: "Arcade",
      icon: <ArcadeIcon/>,
    },
    {
      name: "Advance",
      icon: <AdvanceIcon/>,
    },
    {
      name: "Pro",
      icon: <ProIcon/>,
    },
  ];
  return (
    <form noValidate autoComplete="off">
      <RadioGroup
        sx={{
          gap: { xs: "1rem", md: "2rem" },
          mb: "1.3rem",
          display: { md: "inline-flex", flexDirection: "row" },
        }}
      >
        {plans.map((plan) => (
          <FormControlLabel
            key={plan.name}
            labelPlacement={isMediumScreen ? "bottom" : "end"}
            sx={{
              border: "2px solid",
              borderColor: neutral.LightGray.main,
              p: ".5rem",
              pr: { md: "5rem" },
              pl: {
                md: "1rem",
              },
              py: {
                md: "1.5rem",
              },
              ml: ".1rem",
              borderRadius: ".5rem",
              width: { xs: "100%", md: "auto" },
            }}
            label={
              <Stack>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{
                    color: primary.MarineBlue.main,
                    fontWeight: "700",
                    mt: {
                      md: "4rem",
                    },
                  }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ color: neutral.CoolGray.main, fontWeight: "400" }}
                >
                  $90/Yr
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  sx={{ color: primary.MarineBlue.main, fontWeight: "700" }}
                >
                  2 months free
                </Typography>
              </Stack>
            }
            control={<Radio icon={plan.icon} />}
          />
        ))}
      </RadioGroup>
      <Stack
        component="div"
        direction="row"
        sx={{
          bgcolor: neutral.LightGray.main,
          px: "3rem",
          width: "100%",
          borderRadius: ".5rem",
          py: ".5rem",
          alignItems: "center",
          textAlign: "center",
          mt: {
            md: "2rem",
          },
          mb: "2rem",
        }}
      >
        <Typography
          component="p"
          sx={{
            pl: { md: "13rem", fontWeight: "700" },
          }}
        >
          Monthly
        </Typography>
        <Switch
          sx={{
            "&.MuiSwitch-root": {
              width: "4.3rem",
            },
            "&:active": {
              "& .MuiSwitch-thumb": {
                width: "1rem",
              },
              "& .MuiSwitch-switchBase.Mui-checked": {
                transform: "translateX(1rem)",
              },
            },
            "& .MuiSwitch-switchBase": {
              padding: 2,
              "&.Mui-checked": {
                transform: "translateX(1.5rem)",
                color: neutral.Alabaster.main,
                "& + .MuiSwitch-track": {
                  opacity: 1,
                  backgroundColor: primary.MarineBlue.main,
                },
              },
            },
            "& .MuiSwitch-thumb": {
              width: ".8rem",
              height: ".8rem",
              borderRadius: "50%",
              transition: theme.transitions.create(["width"], {
                duration: 200,
              }),
            },
            "& .MuiSwitch-track": {
              opacity: 1,
              height: "1.5rem",
              borderRadius: "10rem",
              width: "7.5rem",
              backgroundColor: primary.MarineBlue.main,
              boxSizing: "border-box",
            },
          }}
        />
        <Typography component="p" sx={{ fontWeight: "700" }}>
          Yearly
        </Typography>
      </Stack>
      <Buttons />
    </form>
  );
};

export default SelectPlan;
