import {
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useTheme,
} from "@mui/material";
import Buttons from "../../componets/Buttons";

const PickAddOns: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;

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
    <form autoComplete="off" noValidate>
      <FormGroup sx={{ gap: "1rem" }}>
        {addOns.map((addOn) => (
          <FormControlLabel
            key={addOn.heading}
            sx={{
              border: "1px solid",
              borderColor: neutral.LightGray.main,
              p: ".5rem",
              borderRadius: ".5rem",
              "&:hover":{
                borderColor:primary.PurplishBlue.main
              },
              
            }}
            label={
              <Stack direction="row">
                <Stack>
                  <Typography
                    component="h3"
                    variant="body1"
                    sx={{ color: primary.MarineBlue.main, fontWeight: "700" }}
                  >
                    {addOn.heading}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    sx={{ color: neutral.CoolGray.main, fontWeight: "500" }}
                  >
                    {addOn.content}
                  </Typography>
                </Stack>
                <Typography
                  component="p"
                  variant="body2"
                  sx={{ color: primary.PurplishBlue.main }}
                >
                  +$ 1/mo
                </Typography>
              </Stack>
            }
            control={
              <Checkbox
              sx={{
                color: primary.PurplishBlue.main,
                '&.Mui-checked': {
                  color: primary.PurplishBlue.main,
                },
              }}
              />
            }
          />
        ))}
      </FormGroup>
      <Buttons />
    </form>
  );
};

export default PickAddOns;
