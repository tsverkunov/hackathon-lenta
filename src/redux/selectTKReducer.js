import {createSlice} from "@reduxjs/toolkit";

const selectTKReducer = createSlice({
  name: 'selectReducer',
  initialState: {
    isShowedTK: false,
    defaultTextTK: 'Выберите ТК',
    listTK: [
      {id: 1, name: 'ТК №1'},
      {id: 2, name: 'ТК №2'},
      {id: 3, name: 'ТК №3'},
      {id: 4, name: 'ТК №4'},
      {id: 5, name: 'ТК №5'},
    ]
  },
  reducers: {
    showListTK(state) {
      state.isShowedTK = !state.isShowedTK
    },
    selectedTK(state, action) {
      state.defaultTextTK = action.payload
    }
  }
})

export default selectTKReducer.reducer
export const {showListTK, selectedTK} = selectTKReducer.actions
