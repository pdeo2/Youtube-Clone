import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";
import appSlice from "./appSlice";
import appSlice2 from "./appSlice2";
const store=configureStore({
reducer:rootReducer,

})
export default store;