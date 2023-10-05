import {combineReducers, configureStore} from "@reduxjs/toolkit";
import formReducer from "./formReducer.js";
import checkboxReducer from "./checkboxReducer.js";
import selectCityReducer from "./selectCityReducer.js";
import selectTKReducer from "./selectTKReducer.js";

const rootReducer = combineReducers({
  formReducer: formReducer,
  checkboxReducer: checkboxReducer,
  selectCityReducer: selectCityReducer,
  selectTKReducer: selectTKReducer
})

export const store = configureStore({
  reducer: rootReducer,
})
