import { Stack, Typography, Divider, Link, useTheme } from "@mui/material";

import { useNavigate} from "react-router";


import { useDispatch } from "react-redux";
import { store } from "../../app/store";
import { changeStep } from "../header/headerSlice";

import calculateTotal from "../../utils/functions/calculateTotal";

import Buttons from "../../components/Buttons";

const FinishUp: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;

  const {
    pickAddOns,
    selectPlan: {
      billing,
      plan: { name, price },
    },
  } = store.getState();
  const isMonthly = billing === "monthly";
  const totalPrice = calculateTotal(price, pickAddOns);

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleLinkClick=()=>{
    dispatch(changeStep())
    navigate(-2)
  }
  return (
    <>
      <Stack
        sx={{
          bgcolor: neutral.lightGray.main,
          p: "1.5rem",
          borderRadius: ".3rem",
          gap: ".5rem",
          mx: ".5rem",
        }}
      >
        <Stack direction="row" sx={{ gap: "6.7rem" }}>
          <Stack>
            <Typography
              component="p"
              sx={{ color: primary.marineBlue.main, fontWeight: "700" }}
            >
              {name} ({billing})
            </Typography>
            <Link
              component="button"
              variant="body1"
              onClick={handleLinkClick}
              sx={{ color: neutral.coolGray.main,textAlign:"left", fontWeight: "5 00",py:2}}
            >
              Change
            </Link>
          </Stack>
          <Typography
            component="p"
            variant="body1"
            sx={{ color: primary.marineBlue.main, fontWeight: "700" }}
          >
            ${price}/{isMonthly ? "mo" : "yr"}
          </Typography>
        </Stack>
        <Divider />

        {pickAddOns.length !== 0 &&
          pickAddOns.map((pickAddOn) => (
            <Stack key={pickAddOn.name} direction="row" sx={{ gap: "7rem" }}>
              <Typography
                component="p"
                variant="body1"
                sx={{ color: neutral.coolGray.main, fontWeight: "500" }}
              >
                {pickAddOn.name}
              </Typography>
              <Typography
                component="p"
                variant="body1"
                sx={{ color: primary.marineBlue.main, fontWeight: "400" }}
              >
                +${pickAddOn.price}/{isMonthly ? "mon" : "yr"}
              </Typography>
            </Stack>
          ))}
      </Stack>
      <Stack direction="row" sx={{ gap: "7rem", pt: "1rem", mx: "1.7rem" }}>
        <Typography
          component="p"
          variant="body1"
          sx={{ color: neutral.coolGray.main, fontWeight: "500" }}
        >
          Total(per {isMonthly ? "month" : "year"})
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{ color: primary.purplishBlue.main, fontWeight: "700" }}
        >
          ${totalPrice}/{isMonthly ? "mon" : "yr"}
        </Typography>
      </Stack>
      <Buttons />
    </>
  );
};

export default FinishUp;
