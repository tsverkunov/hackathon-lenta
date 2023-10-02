import {createSlice} from "@reduxjs/toolkit";

const selectReducer = createSlice({
  name: 'selectReducer',
  initialState: {
    isChecked: false
  },
  reducers: {
    checked(state, action) {
      state.isChecked = action.payload
    }
  }
})

export default selectReducer.reducer
export const {checked} = selectReducer.actions