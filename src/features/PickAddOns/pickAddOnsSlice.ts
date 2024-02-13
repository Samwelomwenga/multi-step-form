import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { selectPlanState, updateBilling } from "../selectPlan/selectPlanSlice";

export type PickedAddOnsState = {
  name: "online service" | "large storage" | "customizable profile" | null;
  price: number | null;
};
type PickAddsOnsAndBillingState = {
  pickAddOns: PickedAddOnsState[];
  billing: "monthly" | "yearly";
};
const initialState: PickAddsOnsAndBillingState = {
  pickAddOns: [],
  billing: "monthly",
};
const pickAddOnsSlice = createSlice({
  name: "pickAddOnsSlice",
  initialState,
  reducers: {
    addAddOns: (state, action: PayloadAction<string>) => {
      const addOns = action.payload;
      const billing = state.billing;
      switch (addOns) {
        case "online": {
          state.pickAddOns.push({
            name: "online service",
            price: billing === "monthly" ? 1 : 10,
          });

          break;
        }
        case "profile": {
          state.pickAddOns.push({
            name: "customizable profile",

            price: billing === "monthly" ? 2 : 20,
          });

          break;
        }
        case "storage": {
          state.pickAddOns.push({
            name: "large storage",

            price: billing === "monthly" ? 2 : 20,
          });

          break;
        }

        default:
          break;
      }
    },
    removeAddOns: (state, action: PayloadAction<string>) => {
      const addOns = action.payload;
      switch (addOns) {
        case "online": {
          state.pickAddOns = state.pickAddOns.filter(
            (state) => state.name !== "online service"
          );
          break;
        }
        case "profile": {
          state.pickAddOns = state.pickAddOns.filter(
            (state) => state.name !== "customizable profile"
          );
          break;
        }
        case "storage": {
          state.pickAddOns = state.pickAddOns.filter(
            (state) => state.name !== "large storage"
          );
          break;
        }

        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      updateBilling,
      (state, action: PayloadAction<selectPlanState>) => {
        const {
          payload: { switchValue },
        } = action;
        const billing = switchValue ? "yearly" : "monthly";
        state.billing = billing;
        console.log(billing);
      }
    );
  },
});
export const { addAddOns, removeAddOns } = pickAddOnsSlice.actions;
export default pickAddOnsSlice.reducer;
