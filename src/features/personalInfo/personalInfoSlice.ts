import { createSlice, PayloadAction} from "@reduxjs/toolkit";
export type personalInfoState={
    name:string,
    email:string,
    phone:string,
}

const personalInfoSlice = createSlice({
  name: "PersonalInfoSlice",
  initialState: {
    name: "",
    email: "",
    phone: "",
  } as personalInfoState,
  reducers: {
    updatePersonalInfo: (state, action:PayloadAction<personalInfoState>) => {
      console.log(action.payload)
      return {...state,...action.payload}
    },
  },
});

export const { updatePersonalInfo } = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
