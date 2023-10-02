import {combineReducers, configureStore} from "@reduxjs/toolkit";
import formReducer from "./formReducer.js";
import selectReducer from "./selectReducer.js";

const rootReducer = combineReducers({
  formReducer: formReducer,
  selectReducer: selectReducer
})

export const store = configureStore({
  reducer: rootReducer,
})