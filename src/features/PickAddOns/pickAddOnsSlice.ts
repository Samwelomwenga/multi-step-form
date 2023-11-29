import { createSlice, PayloadAction,} from "@reduxjs/toolkit";

import { passBillingValue } from "../selectPlan/selectPlanSlice";
export type PickedAddOnsState = {
  name: "online service" | "large storage" | "customizable profile" | null;
  price: number | null;
};
// const billing =selectedBilling();
/**
 * Slice for managing the selected add-ons in the multi-step form.
 */
const pickAddOnsSlice = createSlice({
  name: "pickAddOnsSlice",
  initialState: [] as PickedAddOnsState[],
  reducers: {
    addAddOns: (state, action: PayloadAction<string>) => {
      const addOns = action.payload;
      switch (addOns) {
        case "online": {
          state.push({
            name: "online service",
            price: billing === "monthly" ? 1 : 10,
        
          });

          break;
        }
        case "profile": {
          state.push({
            name: "customizable profile",

            price: billing === "monthly" ? 2 : 20,
          });

          break;
        }
        case "storage": {
          state.push({
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
          return state.filter((state) => state.name !== "online service");

          break;
        }
        case "profile": {
          return state.filter((state) => state.name !== "customizable profile");

          break;
        }
        case "storage": {
          return state.filter((state) => state.name !== "large storage");
          break;
        }

        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(passBillingValue.fulfilled, (state, action) => {
     const billing = action.payload;
     state.forEach(addOn => {
       if (addOn.name === "online service") {
         addOn.price = billing === "monthly" ? 1 : 10;
       } else if (addOn.name === "customizable profile") {
         addOn.price = billing === "monthly" ? 2 : 20;
       } else if (addOn.name === "large storage") {
         addOn.price = billing === "monthly" ? 2 : 20;
       }
     });
    });
    },
});
export const { addAddOns, removeAddOns } = pickAddOnsSlice.actions;
export default pickAddOnsSlice.reducer;


