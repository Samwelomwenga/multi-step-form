import {
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useTheme,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { useSelector, useDispatch } from "react-redux";
import { PickedAddOnsState, addAddOns, removeAddOns } from "./pickAddOnsSlice";

import Buttons from "../../components/Buttons";

const PickAddOns: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;

  const dispatch = useDispatch();
  const pickedAddOns = useSelector(
    (state: { pickAddOns: PickedAddOnsState }) => state.pickAddOns
  );
  console.log(pickedAddOns);

  const { control } = useForm<PickedAddOnsState>();

  const addOns = [
    {
      heading: "Online  service",
      content: "Access to multiplayer games",
      value: "online",
    },
    {
      heading: "Large Storage",
      content: "Extra 1TB of cloud save",
      value: "storage",
    },
    {
      heading: "Customizable profile",
      content: "Custom theme on your profile",
      value: "profile",
    },
  ];

  const handleCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { checked } = event.target;

    !checked ? dispatch(removeAddOns(value)) : dispatch(addAddOns(value));
  };

  return (
    <>
      <form autoComplete="off" noValidate>
        <FormGroup sx={{ gap: "1rem" }}>
          {addOns.map((addOn) => (
            <Controller
              key={addOn.heading}
              name={"name"}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  name={addOn.value}
                  onChange={(event) =>
                    handleCheckbox(
                      event as React.ChangeEvent<HTMLInputElement>,
                      addOn.value
                    )
                  }
                  sx={{
                    border: "1px solid",
                    borderColor: neutral.LightGray.main,
                    p: ".5rem",
                    borderRadius: ".5rem",
                    "&:hover": {
                      borderColor: primary.PurplishBlue.main,
                    },
                  }}
                  label={
                    <Stack direction="row">
                      <Stack>
                        <Typography
                          component="h3"
                          variant="body1"
                          sx={{
                            color: primary.MarineBlue.main,
                            fontWeight: "700",
                          }}
                        >
                          {addOn.heading}
                        </Typography>
                        <Typography
                          component="p"
                          variant="body2"
                          sx={{
                            color: neutral.CoolGray.main,
                            fontWeight: "500",
                          }}
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
                        "&.Mui-checked": {
                          color: primary.PurplishBlue.main,
                        },
                      }}
                    />
                  }
                />
              )}
            />
          ))}
        </FormGroup>
        <Buttons />
      </form>
      <DevTool control={control} />
    </>
  );
};

export default PickAddOns;
