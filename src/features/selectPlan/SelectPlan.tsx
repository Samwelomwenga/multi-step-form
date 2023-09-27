import {
  Stack,
  Typography,
  Switch,
  RadioGroup,
  Radio,
  FormControlLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { useNavigate } from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import { selectPlanState, updateBilling, updatePlan } from "./selectPlanSlice";

import { ReactComponent as ArcadeIcon } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as AdvanceIcon } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../assets/images/icon-pro.svg";

import Buttons from "../../components/Buttons";
import { nextStep } from "../header/headerSlice";

interface plansInterface {
  name: "Arcade" | "Advance" | "Pro";
  icon: JSX.Element;
  value: "arcade" | "advance" | "pro";
  price: string;
}
const SelectPlan: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  const isMediumScreen = useMediaQuery("(min-width:960px)");

  const navigate = useNavigate();


  const selectPlan = useSelector(
    (state: { selectPlan: selectPlanState }) => state.selectPlan
  );
  const dispatch = useDispatch();
  const handleSelectedBilling = (value: boolean) => {
    const updatedSelectPlanState: selectPlanState = {
      ...selectPlan,
      switchValue: value,
    };
    dispatch(updateBilling(updatedSelectPlanState));
  };

  const handleSelectedPlan = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    // Create a selectPlanState object with the selectedPlan value
    const selectedPlanState: selectPlanState = {
      plan: {
        name: event.target.value as "arcade" | "advance" | "pro",
        price: 9,
      },
      billing: "monthly",
      switchValue: false,
      selectedPlan: value,
    };

    dispatch(updatePlan(selectedPlanState));
  };
  const onSubmit = () => {
    dispatch(nextStep());
    navigate("/step=3");
  };

  const {
    billing,
    plan: { name },
  } = selectPlan;

  const { control,handleSubmit} = useForm<selectPlanState>({ defaultValues: selectPlan });

  const plans: plansInterface[] = [
    {
      name: "Arcade",
      icon: <ArcadeIcon />,
      value: "arcade",
      price: billing === "monthly" ? "$9/mo" : "$90/yr",
    },
    {
      name: "Advance",
      icon: <AdvanceIcon />,
      value: "advance",
      price: billing === "monthly" ? "$12/mo" : "$120/yr",
    },
    {
      name: "Pro",
      icon: <ProIcon />,
      value: "pro",
      price: billing === "monthly" ? "$15/mo" : "$150/yr",
    },
  ];
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="plan"
          control={control}
          render={({ field }) => (
            <RadioGroup
              {...field}
              onChange={(event) => {
                handleSelectedPlan(event, event.target.value);
              }}
              sx={{
                gap: { xs: "1rem", md: "2rem" },
                mb: "1.3rem",
                display: { md: "inline-flex", flexDirection: "row" },
              }}
            >
              {plans.map((plan) => (
                <FormControlLabel
                  key={plan.name}
                  value={plan.value}
                  labelPlacement={isMediumScreen ? "bottom" : "end"}
                  sx={{
                    border: "2px solid",
                    borderColor:
                      plan.name.toLocaleLowerCase() === name
                        ? primary.purplishBlue.main
                        : neutral.lightGray.main,
                    bgcolor:
                      plan.name.toLocaleLowerCase() === name
                        ? primary.purplishBlue.light
                        : neutral.alabaster.main,
                    p: ".5rem",
                    pr: { md: "5rem" },
                    pl: {
                      md: "1rem",
                    },
                    py: {
                      md: "1.5rem",
                    },
                    ml: ".1rem",
                    borderRadius: ".5rem",
                    width: { xs: "100%", md: "auto" },
                    ":hover": {
                      borderColor:
                         primary.purplishBlue.main,
                    },
                  }}
                  label={
                    <Stack>
                      <Typography
                        component="p"
                        variant="body1"
                        sx={{
                          color: primary.marineBlue.main,
                          fontWeight: "700",
                          mt: {
                            md: "4rem",
                          },
                        }}
                      >
                        {plan.name}
                      </Typography>
                      <Typography
                        component="p"
                        variant="body1"
                        sx={{ color: neutral.coolGray.main, fontWeight: "400" }}
                      >
                        {plan.price}
                      </Typography>
                      {billing === "yearly" && (
                        <Typography
                          component="p"
                          variant="body2"
                          sx={{
                            color: primary.marineBlue.main,
                            fontWeight: "700",
                          }}
                        >
                          2 months free
                        </Typography>
                      )}
                    </Stack>
                  }
                  control={<Radio icon={plan.icon} checkedIcon={plan.icon} />}
                />
              ))}
            </RadioGroup>
          )}
        />

        <Stack
          component="div"
          direction="row"
          sx={{
            bgcolor: neutral.lightGray.main,
            px: "3rem",
            width: "100%",
            borderRadius: ".5rem",
            py: ".5rem",
            alignItems: "center",
            textAlign: "center",
            mt: {
              md: "2rem",
            },
            mb: "2rem",
          }}
        >
          <Typography
            component="p"
            sx={{
              pl: {
                md: "13rem",
                fontWeight: "700",
                color:
                  billing === "monthly"
                    ? primary.marineBlue.main
                    : neutral.coolGray.main,
              },
            }}
          >
            Monthly
          </Typography>
          <Controller
            name="switchValue"
            control={control}
            render={({ field }) => (
              <Switch
                {...field}
                checked={selectPlan.billing==="yearly"}
                onChange={(event) => {
                  field.onChange(event.target.checked);
                  handleSelectedBilling(event.target.checked);
                }}
                sx={{
                  "&.MuiSwitch-root": {
                    width: "4.3rem",
                  },
                  "&:active": {
                    "& .MuiSwitch-thumb": {
                      width: "1rem",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      transform: "translateX(1rem)",
                    },
                  },
                  "& .MuiSwitch-switchBase": {
                    padding: 2,
                    "&.Mui-checked": {
                      transform: "translateX(1.5rem)",
                      color: neutral.alabaster.main,
                      "& + .MuiSwitch-track": {
                        opacity: 1,
                        backgroundColor: primary.marineBlue.main,
                      },
                    },
                  },
                  "& .MuiSwitch-thumb": {
                    width: ".8rem",
                    height: ".8rem",
                    borderRadius: "50%",
                    transition: theme.transitions.create(["width"], {
                      duration: 200,
                    }),
                  },
                  "& .MuiSwitch-track": {
                    opacity: 1,
                    height: "1.5rem",
                    borderRadius: "10rem",
                    width: "7.5rem",
                    backgroundColor: primary.marineBlue.main,
                    boxSizing: "border-box",
                  },
                }}
              />
            )}
          />

          <Typography
            component="p"
            sx={{
              fontWeight: "700",
              color:
                billing === "yearly"
                  ? primary.marineBlue.main
                  : neutral.coolGray.main,
            }}
          >
            Yearly
          </Typography>
        </Stack>
        <Buttons/>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default SelectPlan;
