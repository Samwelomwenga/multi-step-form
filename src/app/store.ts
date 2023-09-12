import { configureStore ,combineReducers} from "@reduxjs/toolkit";

import personalInfoReducer from "../features/personalInfo/personalInfoSlice";
import selectPlanReducer   from  "../features/selectPlan/selectPlanSlice"
import  pickAddOnsReducer from "../features/PickAddOns/pickAddOnsSlice"
import { personalInfoState } from "../features/personalInfo/personalInfoSlice";
import { PickedAddOnsState } from "../features/PickAddOns/pickAddOnsSlice";
import { selectPlanState } from "../features/selectPlan/selectPlanSlice";

export type RootState = {
    personalInfo: personalInfoState;
    selectPlan: selectPlanState;
    pickedAddOns: PickedAddOnsState[];
  };
  

const rootReducer=combineReducers({
    personalInfo:personalInfoReducer,
    selectPlan:selectPlanReducer,
    pickAddOns:pickAddOnsReducer,

})

export const store= configureStore({
    reducer:rootReducer,
});

