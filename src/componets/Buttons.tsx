import {Button,Stack} from '@mui/material'
import {useTheme} from '@mui/material/styles'
// import { useNavigate } from 'react-router-dom'

const NextButton:React.FC = () => {
  const theme = useTheme()

  return (
    <Button type='button' variant='contained' sx={{bgcolor:theme.palette.Primary.PastleBlue}}>Next Step</Button>
  )
}
 const BackButton:React.FC=()=>{
    // const navigate=useNavigate()
    // const handleBackButton = () => {
    //     navigate(-1)
    // }
    return(
        <Button variant='text' >Go Back</Button>
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
 