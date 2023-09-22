import {Stack,useTheme} from '@mui/material'
import ThankYou from '../components/ThankYou'
import Header from '../features/header/Header'


const ThankYouStep:React.FC = () => {
  const theme = useTheme();
  const neutral = theme.palette.neutral;
  return (
    <Stack direction={{md:'row'}}  sx={{bgcolor:{
      xs:neutral.lightGray.main,
      md:neutral.white.main
    }, height:"100vh",}}>
        <Header/>
        <ThankYou/>
    </Stack>
  )
}

export default ThankYouStep