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
      {
        compName : 'some',
        index : 0,
        role : 'dev',
        startDate : ["october","2022","10"],
        endDate : ["october","2022","25"],
        jobDesc : 'some desc',
        isComplete : false
      },
 
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
