import { configureStore } from "@reduxjs/toolkit";

import personalInfoReducer from "../features/personalInfo/personalInfoSlice";
import selectPlanReducer   from  "../features/selectPlan/selectPlanSlice"

export const store= configureStore({
    reducer:{
        personalInfo:personalInfoReducer,
        selectPlan:selectPlanReducer,
    },
});

// export type AppDispatch= typeof store.dispatch;
// export type RootState= ReturnType <typeof store.getState>;