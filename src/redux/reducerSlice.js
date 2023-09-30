// Пример слайса и пока заглушка

import {createSlice} from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: 'reducerSlice',
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1
    },
    decrement(state) {
      state.count = state.count - 1
    }
  }
})

export default reducerSlice.reducer
export const {increment, decrement} = reducerSlice.actions