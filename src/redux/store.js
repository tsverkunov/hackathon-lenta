import {combineReducers, configureStore} from "@reduxjs/toolkit";
import formReducer from "./formReducer.js";
import checkboxReducer from "./checkboxReducer.js";
import selectReducer from "./selectReducer.js";


const rootReducer = combineReducers({
  formReducer: formReducer,
  checkboxReducer: checkboxReducer,
  selectReducer: selectReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
