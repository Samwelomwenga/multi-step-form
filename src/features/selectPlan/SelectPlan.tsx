import {
  Stack,
  Typography,
  Switch,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvanceIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";

import Header from "../header/Header";
import { BackButton,NextButton } from "../../componets/Button";
const SelectPlan = () => {
  const plans = [
    {
      name: "Arcade",
      image: ArcadeIcon,
    },
    {
      name: "Advance",
      image: AdvanceIcon,
    },
    {
      name: "Pro",
      image: ProIcon,
    },
  ];
  return (
    <Stack component="main"  direction={{md:"row"}}sx={{bgcolor:'grey'}}>
      <Header />
      <Stack component="section" sx={{bgcolor:"white", marginX:'auto',px:"1.5rem",borderRadius:"3%",width:'100%'}}>
        <Typography component="h2" variant="h5">
          Select your plan
        </Typography>
        <Typography component="p" variant="body2">
          You have the option of monthly or yearly billing
        </Typography>
        <form noValidate autoComplete="off">
          <RadioGroup>
            {plans.map((plan) => (
              <FormControlLabel
                label={
                  <Stack>
                    <Typography>{plan.name}</Typography>
                    <Typography>$90/Yr</Typography>
                    <Typography>2 months free</Typography>
                  </Stack>
                }
                control={<Radio icon={plan.image} />}
              />
            ))}
          </RadioGroup>
          <Stack component='div' direction='row' sx={{bgcolor:"grey",px:"3rem",width:"100%",borderRadius:".3rem",py:".3rem",alignItems:"center"}}>
            <Typography>Monthly</Typography>
            <Switch/>
            <Typography>Yearly</Typography>
            </Stack >
            <Stack sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <BackButton />
            <NextButton />
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default SelectPlan;
