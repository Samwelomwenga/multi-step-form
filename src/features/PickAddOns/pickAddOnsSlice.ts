import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

export type PickedAddOnsState = {
  name: "online service" | "large storage" | "customizable profile" | null;
  price: number | null;
};

// const selectBilling=(state:RootState)=>state.selectPlan.billing
// const billing=selectBilling(store.getState())

const pickAddOnsSlice = createSlice({
  name: "pickAddOnsSlice",
  initialState: [] as PickedAddOnsState[],
  reducers: {
    addAddOns: (state, action: PayloadAction<string>) => {
      const billing = useSelector((state: RootState) => state.selectPlan.billing);
      const addOns = action.payload;
      switch (addOns) {
        case "online": {
          state.push({ name: "online service", price: billing==="monthly"?1:10 });

          break;
        }
        case "profile": {
          state.push({ name: "customizable profile", price: 2 });

          break;
        }
        case "storage": {
          state.push({ name: "large storage", price: 3 });

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
});
export const { addAddOns, removeAddOns } = pickAddOnsSlice.actions;
export default pickAddOnsSlice.reducer;
