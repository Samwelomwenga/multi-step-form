import { Stack, Typography, Divider, useTheme } from "@mui/material";
import Buttons from "../../componets/Buttons";
const FinishUp: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  return (
    <>
      <Stack
        sx={{
          bgcolor: neutral.LightGray.main,
          p: "1.5rem",
          borderRadius: ".3rem",
          gap: ".5rem",
          mx:".5rem",
        }}
      >
        <Stack direction="row" sx={{ gap: "6.7rem" }}>
          <Stack>
            <Typography component='p' variant="body1" sx={{color:primary.MarineBlue.main,fontWeight:"700"}}>Arcade(Yearly)</Typography>
            <Typography component='p' variant="body1" sx={{color:neutral.CoolGray.main,fontWeight:"5 00"}}>Change</Typography>
          </Stack>
          <Typography component='p' variant="body1" sx={{color:primary.MarineBlue.main,fontWeight:"700"}}>$90/yr</Typography>
        </Stack>
        <Divider />

        <Stack direction="row" sx={{ gap: "7rem" }}>
          <Typography component='p' variant="body1" sx={{color:neutral.CoolGray.main,fontWeight:"500"}} >Online service</Typography>
          <Typography component='p' variant="body1" sx={{color:primary.MarineBlue.main,fontWeight:"400"}}>+$10/yr</Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: "7.5rem" }}>
          <Typography component='p' variant="body1" sx={{color:neutral.CoolGray.main,fontWeight:"500"}}>large storage</Typography>
          <Typography component='p' variant="body1" sx={{color:primary.MarineBlue.main,fontWeight:"400"}}>+$20/yr</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ gap: "7rem", pt: "1rem",mx:"1.7rem" }}>
        <Typography component='p' variant="body1" sx={{color:neutral.CoolGray.main,fontWeight:"500"}}>Total(per year)</Typography>
        <Typography component='p' variant="body1" sx={{color:primary.PurplishBlue.main,fontWeight:"700"}}>$120/yr</Typography>
      </Stack>
      <Buttons/>
    </>
  );
};

export default FinishUp;
