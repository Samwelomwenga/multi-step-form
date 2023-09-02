import {Card,CardContent,CardMedia,Typography,Stack} from '@mui/material'
import iconThankYou from '../assets/images/icon-thank-you.svg'
const ThankYou:React.FC = () => {
  return (
    <Card sx={{placeItems:"center",textAlign:"center",mx:"1rem",py:"2rem",px:"1rem"}}>
        <Stack sx={{my:"auto"}}>
        <CardMedia component='img' sx={{maxWidth:"4rem",mx:"auto"}} image={iconThankYou} alt='Thank You Icon'/>
        <CardContent>
            <Typography component='h3' variant='h5' sx={{my:"1rem"}}> Thank you! </Typography>
            <Typography paragraph>
            Thanks for confirming your subscription! 
            We hope you have fun using our 
            platform. If you ever need support,
             please feel free to email us at
              support@loremgaming.com. 
            </Typography>
        </CardContent>
        </Stack>
    </Card>
  )
}

export default ThankYou