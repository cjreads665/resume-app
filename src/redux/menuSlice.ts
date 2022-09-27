import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name : 'menu',
    initialState :{
        isOpen : false
    },
    reducers:{
        openMenu : (state:any,action : any)=>{
           state.isOpen = !state.isOpen
           console.log(state.isOpen);
           
        }
    }
})

export const {openMenu} = menuSlice.actions

export default menuSlice.reducer