import { Stack, Typography, Divider, useTheme } from "@mui/material";
import Buttons from "../../components/Buttons";
import { store } from "../../app/store";
import calculateTotal from "../../utils/functions/calculateTotal";
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
  const totalPrice=calculateTotal(price, pickAddOns);
  // console.log(billing, "\n", price, "\n", name, "\n", pickAddOns);
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
              variant="body1"
              sx={{ color: primary.marineBlue.main, fontWeight: "700" }}
            >
              {name} ({billing})
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{ color: neutral.coolGray.main, fontWeight: "5 00" }}
            >
              Change
            </Typography>
          </Stack>
          <Typography
            component="p"
            variant="body1"
            sx={{ color: primary.marineBlue.main, fontWeight: "700" }}
          >
            ${price}/{isMonthly? "mo" : "yr"}
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
                +${pickAddOn.price}/{isMonthly?"mon":"yr"}
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
          Total(per {isMonthly?"month":"year"})
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{ color: primary.purplishBlue.main, fontWeight: "700" }}
        >
          ${totalPrice}/{isMonthly?"mon":"yr"}
        </Typography>
      </Stack>
      <Buttons step="step=1"/>
    </>
  );
};

export default FinishUp;
