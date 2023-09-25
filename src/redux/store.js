import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducerSlice from "./reducerSlice.js";

const rootReducer = combineReducers({
  reducerSlice: reducerSlice
})

export const store = configureStore({
  reducer: rootReducer,
})