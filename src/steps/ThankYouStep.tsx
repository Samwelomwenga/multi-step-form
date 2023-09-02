import {Stack} from '@mui/material'
import ThankYou from '../componets/ThankYou'
import Header from '../features/header/Header'


const ThankYouStep:React.FC = () => {
  return (
    <Stack direction={{md:'row'}}  sx={{bgcolor:"grey", height:"100vh"}}>
        <Header/>
        <ThankYou/>
    </Stack>
  )
}

export default ThankYouStep