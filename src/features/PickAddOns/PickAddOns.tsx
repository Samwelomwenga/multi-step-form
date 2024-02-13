import {
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useTheme,
  Box,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { PickedAddOnsState, addAddOns, removeAddOns } from "./pickAddOnsSlice";

import Buttons from "../../components/Buttons";
import { RootState, store } from "../../app/store";
import { nextStep } from "../header/headerSlice";

type AddOnsState = {
  heading: "Online service" | "Large Storage" | "Customizable profile";
  content: string;
  value: "online" | "storage" | "profile";
  price: {
    monthly: number;
    yearly: number;
  };
};

const PickAddOns = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const pickedAddOns = useSelector(
    (state: RootState) => state.pickAddOns.pickAddOns
  );
  // const pickedAddOns = useSelector(
  //   (state: { pickAddOns: PickedAddOnsState[] }) => state.pickAddOns
  // );
  console.log(pickedAddOns);
  const {
    selectPlan: { billing },
  } = store.getState();

  const { control, handleSubmit } = useForm<PickedAddOnsState>();
  const onSubmit = () => {
    dispatch(nextStep());
    navigate("/step=4");
  };

  const addOns: AddOnsState[] = [
    {
      heading: "Online service",
      content: "Access to multiplayer games",
      value: "online",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      heading: "Large Storage",
      content: "Extra 1TB of cloud save",
      value: "storage",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      heading: "Customizable profile",
      content: "Custom theme on your profile",
      value: "profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];

  const handleCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { checked } = event.target;
    console.log("checked", checked, "value", value);

    if (checked) {
      dispatch(addAddOns(value));
    } else {
      dispatch(removeAddOns(value));
    }
  };

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                    bgcolor: pickedAddOns.some(
                      (addedAddOn) =>
                        addedAddOn.name?.toLocaleLowerCase() ===
                        addOn.heading.toLocaleLowerCase()
                    )
                      ? primary.purplishBlue.light
                      : neutral.white.main,
                    border: "1px solid",
                    borderColor: neutral.lightGray.main,
                    p: ".5rem",
                    borderRadius: ".5rem",
                    "&:hover": {
                      borderColor: primary.purplishBlue.main,
                    },
                  }}
                  label={
                    <Stack
                      sx={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <Stack>
                        <Typography
                          component="h3"
                          variant="body1"
                          sx={{
                            color: primary.marineBlue.main,
                            fontWeight: "700",
                          }}
                        >
                          {addOn.heading}
                        </Typography>
                        <Typography
                          component="p"
                          variant="body2"
                          sx={{
                            color: neutral.coolGray.main,
                            fontWeight: "500",
                          }}
                        >
                          {addOn.content}
                        </Typography>
                      </Stack>
                      <Box sx={{ ml: { xs: "0rem", md: "28rem" } }}>
                        <Typography
                          component="p"
                          variant="body2"
                          sx={{
                            color: primary.purplishBlue.main,
                            whiteSpace: "nowrap",
                          }}
                        >
                          +$ {addOn.price[billing]}/
                          {billing === "monthly" ? "mo" : "yr"}
                        </Typography>
                      </Box>
                    </Stack>
                  }
                  control={
                    <Checkbox
                      checked={pickedAddOns.some(
                        (addedAddOn) =>
                          addedAddOn.name?.toLocaleLowerCase() ===
                          addOn.heading.toLocaleLowerCase()
                      )}
                      // .map((addOn) => addOn.name?.toLocaleLowerCase())
                      // .includes(addOn.heading.toLocaleLowerCase())}
                      sx={{
                        color: primary.purplishBlue.main,
                        "&.Mui-checked": {
                          color: primary.purplishBlue.main,
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
