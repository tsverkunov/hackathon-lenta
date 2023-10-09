import { createSlice } from '@reduxjs/toolkit'

const dataReducer = createSlice({
  name: 'dataReducer',
  initialState: {
    cities: [],
    selectedCity: '',
    shops: [],
    selectedShop: '',
    categories: [],
    selectedCategories: [],
    forecast: []
  },
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload
    },
    setShops: (state, action) => {
      state.shops = action.payload
    },
    setSelectedShop: (state, action) => {
      state.selectedShop = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload
    },
    setForeCast: (state, action) => {
      state.forecast = action.payload
    }
  },
})

export default dataReducer.reducer
export const {
  setCities,
  setSelectedCity,
  setShops,
  setSelectedShop,
  setCategories,
  setSelectedCategories,
  setForeCast,
} = dataReducer.actions
