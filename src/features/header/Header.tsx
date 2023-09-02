import {Box,Stepper,Step,StepLabel,useMediaQuery,Typography} from '@mui/material'
import sidebarDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import sidebarMobile from '../../assets/images/bg-sidebar-mobile.svg'
const Header:React.FC = () => {
    const  isMediumScreen=useMediaQuery('(min-width:960px)');
  return (
    <Box component="header" sx={{ backgroundRepeat:'no-repeat',justifyContent:'center',height:{xs:'7.5rem',md:'100vh'},width:'100%', backgroundImage:{
        xs:`url(${sidebarMobile})`,
        md:`url(${sidebarDesktop})`
    } }}>
<Stepper  activeStep={0} nonLinear connector={null} orientation={isMediumScreen?'vertical':'horizontal'} 
>
    <Step>
        <StepLabel>
        {isMediumScreen?<Box component='div'><Typography component='p' variant='body2'>STEP 1</Typography>
            <Typography component='p' variant='body2'>YOUR INFO</Typography>
        </Box>:''}
            
        </StepLabel>
    </Step>
    <Step>
    <StepLabel>
        {isMediumScreen?<Box component='div'><Typography component='p' variant='body2'>STEP 2</Typography>
            <Typography component='p' variant='body2'>SELECT PLAN</Typography>
        </Box>:''}
            
        </StepLabel>
    </Step>
    <Step>
    <StepLabel>
        {isMediumScreen?<Box component='div'><Typography component='p' variant='body2'>STEP 3</Typography>
            <Typography component='p' variant='body2'>ADD-ONS</Typography>
        </Box>:''}
            
        </StepLabel>
    </Step>
    <Step>
    <StepLabel>
        {isMediumScreen?<Box component='div'><Typography component='p' variant='body2'>STEP 4</Typography>
            <Typography component='p' variant='body2'>SUMMARY</Typography>
        </Box>:''}
            
        </StepLabel>
    </Step>
</Stepper>

    </Box>
  )
}

export default Header