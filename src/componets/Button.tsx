import {Button} from '@mui/material'
// import { useNavigate } from 'react-router-dom'
export const NextButton:React.FC = () => {
  return (
    <Button variant='contained'>Next Step</Button>
  )
}
export const BackButton:React.FC=()=>{
    // const navigate=useNavigate()
    // const handleBackButton = () => {
    //     navigate(-1)
    // }
    return(
        <Button variant='text' >Go Back</Button>
    )
}