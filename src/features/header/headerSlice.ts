import { createSlice } from "@reduxjs/toolkit";
 export type HeaderSliceState={
    activeStep:number;
}

const headerSlice=createSlice(
    {name:"headerSlice",
    initialState:{
        activeStep:0,
    } as HeaderSliceState,
    reducers:{
        nextStep:(state)=>{
           state.activeStep=state.activeStep+1;
        },
        backStep:(state)=>{
           state.activeStep=state.activeStep-1;

        },

    }
}
)
export const {nextStep,backStep}=headerSlice.actions;
export default headerSlice.reducer;