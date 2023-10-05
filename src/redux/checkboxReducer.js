import {createSlice} from "@reduxjs/toolkit";

const checkboxReducer = createSlice({
  name: 'checkboxReducer',
  initialState: {
    isChecked: false
  },
  reducers: {
    checked(state) {
      state.isChecked = !state.isChecked
    }
  }
})

export default checkboxReducer.reducer
export const {checked} = checkboxReducer.actions