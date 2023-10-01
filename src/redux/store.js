import {combineReducers, configureStore} from "@reduxjs/toolkit";
import formReducer from "./formReducer.js";

const rootReducer = combineReducers({
  formReducer: formReducer
})

export const store = configureStore({
  reducer: rootReducer,
})