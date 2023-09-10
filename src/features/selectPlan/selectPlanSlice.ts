import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type selectPlanState = {
  plan: "arcade" | "advance" | "pro";
  billing: "monthly" | "yearly";
  switchValue: boolean;
};

const selectPlanSlice = createSlice({
  name: "selectPlanSlice",
  initialState: {
    plan: "arcade",
    billing: "monthly",
    switchValue:false,
  } as selectPlanState,
  reducers: {
    updatePlan: (state, action: PayloadAction<selectPlanState>) => {
      return { ...state, ...action.payload };
    },
    updateBilling: (state, action: PayloadAction<selectPlanState>) => {
      const { switchValue } = action.payload;
      const billing = switchValue ? "yearly" : "monthly";
      // state.billing=billing
      return { ...state, billing };
    },
  },
});
export const { updatePlan, updateBilling } = selectPlanSlice.actions;
export default selectPlanSlice.reducer;
