import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    personalInfo:{
        name : "",
        place : ""
    },
    skills:{

    }
  },
  reducers: {
    addPersonalInfo: (state: any, action: any) => {
      state.personalInfo[action.payload.name] = action.payload.value
    },
    addSkills : (state:any,action:any)=>{  
      state.skills[action.payload.name] = action.payload.value
    }
  },
});

export const { addPersonalInfo,addSkills } = userSlice.actions;

export default userSlice.reducer;
