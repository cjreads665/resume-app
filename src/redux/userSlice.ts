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
    education : [
      // {
      //   index :0,
      //   schoolName: "dsadasasda",
      //   degree: "bca",
      //   year: "2005",
      //   gpa: "8.5/10",
      //   isComplete: false,
      // }
    ]

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
    addEdu : (state:any,action:any)=>{
      state.education.push(action.payload.details)
  },
    updateExp : (state:any,action:any)=>{
      state.experience[action.payload.index] = action.payload.details;
    },
    updateEdu : (state:any,action:any)=>{
      state.education[action.payload.index] = action.payload.details;
    },
  },
});

export const { addPersonalInfo,addSkills,addExp,updateExp,addEdu,updateEdu } = userSlice.actions;

export default userSlice.reducer;
