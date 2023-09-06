import {Stack,Box,Typography,useTheme} from '@mui/material'


import Header from '../features/header/Header'
import PersonalInfo from '../features/personalInfo/PersonalInfo'
const PersonalInfoStep:React.FC = () => {
    const theme=useTheme();
    const primary=theme.palette.Primary;
    const neutral=theme.palette.neutral;
  return (
    <Stack
      component="main"
      spacing={{ md: 0 }}
      sx={{ backgroundColor: { xs: neutral.LightGray.main, md: neutral.White.main }, height: "100vh" ,pr:{
        md:"5rem"
      }}}
      direction={{ md: "row" }}
    >
      <Header />
      <Box sx={{ width: "100%"}}>
        <Stack
          component="section"
          mx={2}
          sx={{ backgroundColor: neutral.White.main, borderRadius: "3%",mt:{xs:"-3rem",md:"0"}, px: "1rem",py:"2rem",opacity:"20",ml:{
            md:"-15rem"
          }}}
        >
          <Typography component="h1" variant="h5" my={2} sx={{color:primary.MarineBlue.main,fontWeight:"700"}}>
            Personal info
          </Typography>
          <Typography component="p" variant="body1" mb={2} sx={{color:neutral.CoolGray.main}}>
            Please provide your name,email address, and phone number.
          </Typography>
          <PersonalInfo/>
        </Stack>
      </Box>
    </Stack>
  )
}

export default PersonalInfoStep