import {createSlice} from "@reduxjs/toolkit";

const selectCityReducer = createSlice({
  name: 'selectReducer',
  initialState: {
    isShowedCities: false,
    defaultTextCity: 'Город',
    citiesList: [
      {id: 1, name: 'Москва'},
      {id: 2, name: 'Санкт-Петербург'},
      {id: 3, name: 'Нижний Новгород'},
      {id: 4, name: 'Екатеренбург'},
      {id: 5, name: 'Владивосток'},
    ],
  },
  reducers: {
    showCitiesList(state) {
      state.isShowedCities = !state.isShowedCities
    },
    selectedCities(state, action) {
      state.defaultTextCity = action.payload
    }
  }
})

export default selectCityReducer.reducer
export const {showCitiesList, selectedCities} = selectCityReducer.actions
