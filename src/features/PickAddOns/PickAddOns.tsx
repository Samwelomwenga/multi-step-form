import {
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Header from "../header/Header";
import { NextButton, BackButton } from "../../componets/Button";
const PickAddOns: React.FC = () => {
  const addOns = [
    {
      heading: "Online  service",
      content: "Access to multiplayer games",
    },
    {
      heading: "Large Storage",
      content: "Extra 1TB of cloud save",
    },
    {
      heading: "Customizable profile",
      content: "Custom theme on your profile",
    },
  ];
  return (
    <Stack component="main" direction={{ md: "row" }}>
      <Header />
      <Stack component="section">
        <Typography component="h2" variant="h5">
          Pick adds-ons
        </Typography>
        <Typography component="p" variant="body2">
          Add-ons help enhance your gaming experience
        </Typography>
        <form autoComplete="off" noValidate>
          <FormGroup>
            {addOns.map((addOn) => (
              <FormControlLabel
                key={addOn.heading}
                sx={{
                  backgroundColor: "red",
                  border: "2px solid black",
                  p: ".5rem",
                  borderRadius: ".5rem",
                }}
                label={
                  <Stack direction="row">
                    <Stack>
                      <Typography component="h3" variant="body1">
                        {addOn.heading}
                      </Typography>
                      <Typography component="p" variant="body2">
                        {addOn.content}
                      </Typography>
                    </Stack>
                    <Typography>+$ 1/mo</Typography>
                  </Stack>
                }
                control={<Checkbox />}
              />
            ))}
          </FormGroup>
          <Stack direction='row'>
            <NextButton />
            <BackButton />
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default PickAddOns;
