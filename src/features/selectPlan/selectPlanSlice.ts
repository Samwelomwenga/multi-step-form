import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type selectPlanState = {
  plan: { name: "arcade" | "advance" | "pro"; price: number };
  billing: "monthly" | "yearly";
  switchValue: boolean;
  selectedPlan: string;
};

const selectPlanSlice = createSlice({
  name: "selectPlanSlice",
  initialState: {
    plan: { name: "arcade", price: 9 },
    billing: "monthly",
    switchValue: false,
    selectedPlan: "arcade",
  } as selectPlanState,
  reducers: {
    updatePlan: (state, action: PayloadAction<selectPlanState>) => {
      const { selectedPlan } = action.payload;
      switch (selectedPlan) {
        case "arcade": {
          (state.plan.name = selectedPlan),
            (state.plan.price = state.billing === "yearly" ? 90 : 9);
          break;
        }
        case "advance": {
          (state.plan.name = selectedPlan),
            (state.plan.price = state.billing === "yearly" ? 120 : 12);

          break;
        }
        case "pro": {
          (state.plan.name = selectedPlan),
            (state.plan.price = state.billing === "yearly" ? 150 : 15);

          break;
        }

        default: {
          break;
        }
      }

      // return { ...state, ...action.payload };
    },
    updateBilling: (state, action: PayloadAction<selectPlanState>) => {
      const { switchValue } = action.payload;
      const billing = switchValue ? "yearly" : "monthly";
      state.billing = billing;
      // return { ...state, billing };
    },
  },
});
export const { updatePlan, updateBilling } = selectPlanSlice.actions;
export default selectPlanSlice.reducer;
