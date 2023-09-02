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
import React from "react";

interface plansInterface {
  name:"Arcade"|"Advance"|"Pro"
  image:string
}
const SelectPlan:React.FC = () => {
  const plans:plansInterface[] = [
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
      <Stack component="section" sx={{bgcolor:"white", marginX:'auto',px:"1.5rem",borderRadius:"3%",width:{
        md:'100%'
      }}}>
        <Typography component="h2" variant="h5"  sx={{pt:'1.5rem'}}>
          Select your plan
        </Typography>
        <Typography component="p" variant="body2" sx={{py:'1rem'}}>
          You have the option of monthly or yearly billing
        </Typography>
        <form noValidate autoComplete="off">
          <RadioGroup  sx={{gap:"1rem",alignItems:"center",mb:"1.3rem"}}>
            {plans.map((plan) => (
              <FormControlLabel key={plan.name}  sx={{border:"2px solid grey",p:".5rem", ml:".1rem",borderRadius:".3rem",width:"100%"}}
                label={
                  <Stack>
                    <Typography component='p' variant="body1">{plan.name}</Typography>
                    <Typography component='p' variant="body2">$90/Yr</Typography>
                    <Typography component='p' variant="body2">2 months free</Typography>
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
