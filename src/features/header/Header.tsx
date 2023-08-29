import {Box,Stepper,Step,StepLabel,useMediaQuery} from '@mui/material'
import sidebarDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import sidebarMobile from '../../assets/images/bg-sidebar-mobile.svg'
const Header = () => {
    const  ismediumscreen=useMediaQuery('(min-width:960px)');
  return (
    <Box component="header" sx={{ backgroundRepeat:'no-repeat',height:{md:'100vh'},width:'100%', backgroundImage:{
        xs:`url(${sidebarMobile})`,
        md:`url(${sidebarDesktop})`
    } }}>
<Stepper  activeStep={0} nonLinear orientation={ismediumscreen?'vertical':'horizontal'}
>
    <Step>
        <StepLabel sx={{visibility:{
            
            md:'hidden'
        }}}>
            <Box>STEP 1</Box>
            YOUR INFO
        </StepLabel>
    </Step>
    <Step>
        <StepLabel>
            <Box>STEP 2</Box>
            SELECT PLAN
        </StepLabel>
    </Step>
    <Step>
        <StepLabel>
            <Box>STEP 3</Box>
            ADD-ONS
        </StepLabel>
    </Step>
    <Step>
        <StepLabel>
            <Box>STEP 4</Box>
            SUMMARY
        </StepLabel>
    </Step>
</Stepper>

    </Box>
  )
}

export default Header