import {createSlice} from "@reduxjs/toolkit";

const selectReducer = createSlice({
  name: 'selectReducer',
  initialState: {
    shops: [],
    isShowedCities: false,
    defaultTextCity: 'Город',
    isShowedTK: false,
    defaultTextTK: 'Выберите ТК',
    isChecked: false,
    isFilled: false
  },
  reducers: {
    setShops(state, action) {
      state.shops = action.payload
    },
    showCitiesList(state) {
      state.isShowedCities = !state.isShowedCities
    },
    selectedCities(state, action) {
      state.defaultTextCity = action.payload
    },
    showListTK(state) {
      state.isShowedTK = !state.isShowedTK
    },
    selectedTK(state, action) {
      state.defaultTextTK = action.payload
    },
    checked(state) {
      state.isChecked = !state.isChecked
    },
    filled(state, action) {
      state.isFilled = action.payload
    }
  }
})

export default selectReducer.reducer
export const {
  setShops,
  showCitiesList,
  selectedCities,
  showListTK,
  selectedTK,
  checked,
  filled
} = selectReducer.actions
