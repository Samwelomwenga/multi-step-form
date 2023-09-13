import {
    Stack,
    Typography,
    useTheme
  } from "@mui/material";
  

import Header from "../features/header/Header";
import SelectPlan from "../features/selectPlan/SelectPlan";

  
  const SelectPlanStep:React.FC = () => {

    
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
    
    return (
      <Stack component="main"  direction={{md:"row"}}sx={{bgcolor: {
        xs: neutral.lightGray.main,
        md: neutral.white.main,
      },
      pr:{
        md:"5rem"
      },
      minHeight: "100vh",}}>
        <Header/>
        <Stack component="section" sx={{bgcolor:neutral.white.main,px:"1.5rem",mx:".7rem",borderRadius:"3%", ml: {
            md: "-20rem",
        },mt: { xs: "-3rem", md: "0" },width:{
          md:'100%'
        }}}>
          <Typography component="h2" variant="h5"  sx={{pt:'1.5rem',color:primary.marineBlue.main,fontWeight:"700"}}>
            Select your plan
          </Typography>
          <Typography component="p" variant="body1" sx={{py:'1rem',color:neutral.coolGray.main,fontWeight:"400"}}>
            You have the option of monthly or yearly billing
          </Typography>
          <SelectPlan/>
        
        </Stack>
      </Stack>
    );
  };
  
  export default SelectPlanStep;
  