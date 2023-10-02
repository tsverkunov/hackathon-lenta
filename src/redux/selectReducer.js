import {createSlice} from "@reduxjs/toolkit";

const selectReducer = createSlice({
  name: 'selectReducer',
  initialState: {
    isChecked: false
  },
  reducers: {
    checked(state) {
      state.isChecked = !state.isChecked
    }
  }
})

export default selectReducer.reducer
export const {checked} = selectReducer.actions