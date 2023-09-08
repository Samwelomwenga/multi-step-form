import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type selectPlanState={
    plan:"arcade"|"advance"|"pro",
    billing:"monthly"|"yearly"
}

const selectPlanSlice = createSlice({
  name: "selectPlanSlice",
  initialState: {
    plan: "arcade",
    billing: "monthly",
  }  as selectPlanState,
  reducers:{
    updatePlan:(state,action:PayloadAction<selectPlanState>)=>{
        return{...state, ...action.payload}
    },
    updateBilling:(state,action:PayloadAction<selectPlanState>)=>{
        return{...state, ...action.payload}
    }

  }
});
export const {updatePlan,updateBilling}=selectPlanSlice.actions;
export default selectPlanSlice.reducer;