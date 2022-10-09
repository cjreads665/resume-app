import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    personalInfo:{
        name : "",
        place : ""
    }
  },
  reducers: {
    addPersonalInfo: (state: any, action: any) => {
      state.personalInfo[action.payload.name] = action.payload.value
    },
  },
});

export const { addPersonalInfo } = userSlice.actions;

export default userSlice.reducer;
