import { Typography,TextField, Stack ,FormLabel,Box} from "@mui/material";
import Header from "../header/Header";
import { NextButton } from "../../componets/Button";
const PersonalInfo:React.FC = () => {
  
  return (
    <Stack component='main'  spacing={{md:0}} sx={{backgroundColor:{xs:'grey',md:'white'},height:'100vh'}}  direction={{md:'row'}}>
      <Header />
      <Box sx={{width:'100%'}}>
      <Stack component='section' mx={2} sx={{backgroundColor:'white',borderRadius:"3%",px:'1rem'}} >
        <Typography component="h1" variant="h5" my={2}>
          Personal info
        </Typography>
        <Typography component="p" variant="body1" mb={2}>
          Please provide your name,email address, and phone number.
        </Typography>
        <form noValidate autoComplete="off">
            <FormLabel>Name</FormLabel>
        <TextField type="text" required margin="dense"  placeholder="e.g Stephen King"  fullWidth size="small"/>
        <FormLabel>Email Adrress</FormLabel>
        <TextField type="email" required margin="dense"  placeholder="e.g stephenking@lorem.com" fullWidth size="small"/>
        <FormLabel>Phone Number</FormLabel>
        <TextField type="tel" required  margin="dense" placeholder="e.g +1 234 567 890" fullWidth size="small"/>
            <NextButton/>
        </form>
      </Stack>
        </Box>
    </Stack>
  );
};

export default PersonalInfo;
