import {combineReducers, configureStore} from "@reduxjs/toolkit";
import formReducer from "./formReducer.js";
import selectReducer from "./selectReducer.js";
import dataReducer from "./dataReducer.js";


const rootReducer = combineReducers({
  formReducer: formReducer,
  selectReducer: selectReducer,
  dataReducer: dataReducer
})

export const store = configureStore({
  reducer: rootReducer,
})
