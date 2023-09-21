import { configureStore ,combineReducers} from "@reduxjs/toolkit";

import personalInfoReducer from "../features/personalInfo/personalInfoSlice";
import selectPlanReducer   from  "../features/selectPlan/selectPlanSlice"
import  pickAddOnsReducer from "../features/PickAddOns/pickAddOnsSlice"


export type RootState = ReturnType<typeof store.getState>
  

const rootReducer=combineReducers({
    personalInfo:personalInfoReducer,
    selectPlan:selectPlanReducer,
    pickAddOns:pickAddOnsReducer,

})

export const store= configureStore({
    reducer:rootReducer,
});

