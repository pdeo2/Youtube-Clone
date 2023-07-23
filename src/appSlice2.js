import { createSlice } from "@reduxjs/toolkit";
const appSlice2=createSlice({
    name:"not",
    initialState:{
        isNotification:true,
    },
    reducers:{
        toggleNotification:(state)=>{
            state.isNotification=!state.isNotification
           },
           closeNotification:(state)=>{
            state.isNotification=false;
           }
    }
})
export const {toggleNotification,closeNotification}=appSlice2.actions;
export default appSlice2.reducer;