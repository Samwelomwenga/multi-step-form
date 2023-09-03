import {Typography,Stack} from '@mui/material'

import Header from '../features/header/Header'
import FinishUp from '../features/finishUp/FinishUp'
import React from 'react'

const FinishUpStep:React.FC = () => {
  return (
    <Stack component="main" direction={{md:"row"}} sx={{bgcolor:"grey",minHeight:"100vh"}}>
<Header/>
<Stack component='section' sx={{mx:".7rem",ml:{
    md:"-30rem"
},py:"2rem",borderRadius:".5rem",bgcolor:"white",width:"100%"}}>
    <Typography component='h2' variant='h5' sx={{pl:"1.5rem"}}>Finish up</Typography>
    <Typography sx={{pl:"1.5rem",py:"1rem"}}>Double-check everything looks OK before confirming</Typography>
    <FinishUp/>
</Stack>

    </Stack>
  )
}

export default FinishUpStep