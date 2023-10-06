import {createSlice} from "@reduxjs/toolkit";

const selectReducer = createSlice({
  name: 'selectReducer',
  initialState: {
    shops: [],
    isShowedCities: false,
    defaultTextCity: 'Город',
    citiesList: [
      {id: 1, name: 'Москва'},
      {id: 2, name: 'Санкт-Петербург'},
      {id: 3, name: 'Нижний Новгород'},
      {id: 4, name: 'Екатеринбург'},
      {id: 5, name: 'Владивосток'},
    ],
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
    setShops(state, action) {
      state.shops = state.shops.concat(action.payload)
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
    }
  }
})

export default selectReducer.reducer
export const {setShops, showCitiesList, selectedCities, showListTK, selectedTK} = selectReducer.actions
