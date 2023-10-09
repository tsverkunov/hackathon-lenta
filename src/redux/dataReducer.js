import { createSlice } from '@reduxjs/toolkit'

const dataReducer = createSlice({
  name: 'dataReducer',
  initialState: {
    cities: [],
    selectedCity: '',
    shops: [],
    selectedShop: '',
    categories: {},
    selectedCategories: [],
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
    addSelectedCategories: (state, action) => {
      state.selectedCategories.push(...action.payload)
    },
    removeSelectedCategories: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(
        (category) => !action.payload.includes(category)
      )
    },
  },
})

export default dataReducer.reducer
export const {
  setCities,
  setSelectedCity,
  setShops,
  setSelectedShop,
  setCategories,
  addSelectedCategories,
  removeSelectedCategories,
} = dataReducer.actions
