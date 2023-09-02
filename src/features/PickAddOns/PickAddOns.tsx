import { Stack,Typography,FormGroup,FormControlLabel,Checkbox } from '@mui/material'
import Header from '../header/Header'
import { NextButton,BackButton } from '../../componets/Button'
const PickAddOns:React.FC = () => {
  return (
    <Stack component='main' direction={{md:'row'}}>
        <Header/>
        <Stack component='section'>
          <Typography component='h2'  variant='h5'>Pick adds-ons</Typography>
          <Typography component='p' variant='body2'>Add-ons help enhance your gaming experience</Typography>
          <form autoComplete='off' noValidate>
            <FormGroup>
              <FormControlLabel sx={{backgroundColor:'red',border:'2px solid black',p:'.5rem',borderRadius:'.5rem'}} label={
                <Stack  direction='row'>
                <Stack>
                  <Typography component='h3' variant='body1'>online service</Typography>
                  <Typography component='p' variant='body2'>
                    Access to multiplayer games
                  </Typography>
                </Stack>
                <Typography>+$ 1/mo</Typography>
                </Stack>
                
                } control={<Checkbox/>}/>
              <FormControlLabel label='online service' control={<Checkbox/>}/>
            </FormGroup>
<Stack><NextButton/> <BackButton/> </Stack>
          </form>

        </Stack>
    </Stack>
  )
}

export default PickAddOns