import { createSlice } from "@reduxjs/toolkit";
const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    // Here we can create Multiple slices inside reducers 
    reducers:{
       toggleMenu:(state)=>{
        state.isMenuOpen=!state.isMenuOpen;
       },
       closeMenu:(state)=>{
        state.isMenuOpen=false;
       }
    }
})
export const {closeMenu,toggleMenu}=appSlice.actions;
export default appSlice.reducer;