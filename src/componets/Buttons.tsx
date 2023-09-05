import {Button,Stack} from '@mui/material'
import {useTheme} from '@mui/material/styles'
// import { useNavigate } from 'react-router-dom'

const NextButton:React.FC = () => {
  const theme = useTheme();
  const primary=theme.palette.Primary;
  const neutral=theme.palette.neutral;

  return (
    <Button type='button' variant='contained' size='small' sx={{bgcolor:primary.MarineBlue.main,color:neutral.LightGray.main,py:".4rem",px:".8rem",":hover":{bgcolor:primary.MarineBlue.light}}}>Next Step</Button>
  )
}
 const BackButton:React.FC=()=>{
  const theme = useTheme();
  const primary=theme.palette.Primary;
  const neutral=theme.palette.neutral;
    // const navigate=useNavigate()
    // const handleBackButton = () => {
    //     navigate(-1)
    // }
    return(
        <Button variant='text' size='small' sx={{color:neutral.CoolGray.main,fontWeight:"700",py:".4rem",px:".8rem",":hover":{
          color:primary.MarineBlue.main
        }}} >Go Back</Button>
    )
}




const Buttons:React.FC = () => {

  return (
    <Stack sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <BackButton/>
      <NextButton/>
    </Stack>
  )
}

export default Buttons
 