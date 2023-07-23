import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import appSlice2 from "./appSlice2";

const rootReducer=combineReducers({
    app:appSlice,
    not:appSlice2,
})
export default rootReducer;