import { Stack,Typography,Divider} from "@mui/material"
const FinishUp:React.FC = () => {
  return (
    <>
    <Stack sx={{bgcolor:"grey",mx:"auto",p:"1.5rem", borderRadius:".3rem",gap:".5rem", ml:{
        md:"2rem"
    }}}>
        <Stack direction='row' sx={{gap:"6rem"}}>
            <Stack>
                <Typography>Arcade(Yearly)</Typography>
                <Typography>Change</Typography>
            </Stack>
            <Typography>$90/yr</Typography>

        </Stack>
        <Divider/>

        <Stack direction='row' sx={{gap:"6rem"}}>
         <Typography>Online service</Typography>
            <Typography>+$10/yr</Typography>
        </Stack>
        <Stack direction='row' sx={{gap:"6rem"}}>
            <Typography>large storage</Typography>
            <Typography>+$20/yr</Typography>
        </Stack>
    </Stack>
        <Stack direction='row' sx={{gap:"6rem",pl:"2.7rem",pt:"1rem"}}>
         <Typography>Total(per year)</Typography>
            <Typography>$120/yr</Typography>
        </Stack>
        </>
  )
}

export default FinishUp