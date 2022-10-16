import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    personalInfo:{
        name : "",
        place : ""
    },
    skills:{

    },
    experience :[

    ],

  },
  reducers: {
    addPersonalInfo: (state: any, action: any) => {
      state.personalInfo[action.payload.name] = action.payload.value
    },
    addSkills : (state:any,action:any)=>{  
      state.skills[action.payload.name] = action.payload.value;
    },
    addExp : (state:any,action:any)=>{
        state.experience.push(action.payload.details)
    },
    updateExp : (state:any,action:any)=>{
      state.experience[action.payload.index] = action.payload.details;
    }
  },
});

export const { addPersonalInfo,addSkills,addExp,updateExp } = userSlice.actions;

export default userSlice.reducer;
