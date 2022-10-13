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
      state.skills[action.payload.name] = action.payload.value
    },
    addExp : (state:any,action:any)=>{

    }
  },
});

export const { addPersonalInfo,addSkills } = userSlice.actions;

export default userSlice.reducer;
