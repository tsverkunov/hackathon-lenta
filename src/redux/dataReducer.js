import { createSlice } from '@reduxjs/toolkit'

const dataReducer = createSlice({
  name: 'dataReducer',
  initialState: {
    cities: [],
    selectedCity: '',
    shops: [],
    selectedShop: '',
    selectedShops: [],
    categories: {},
    selectedCategories: [],
    forecast: [],
<<<<<<< HEAD
    stats: []
=======
    isForecastLoading: false,
    isStatsLoading: false,
>>>>>>> d86e4889a902e455515452c78302bc1493f0c0df
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
    addSelectedShops: (state, action) => {
      state.selectedShops.push(...action.payload)
    },
    removeSelectedShops: (state, action) => {
      state.selectedShops = state.selectedShops.filter(
        (shop) => !action.payload.includes(shop)
      )
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
    setForeCast: (state, action) => {
      state.forecast = action.payload
    },
<<<<<<< HEAD
    setStats: (state, action) => {
      state.forecast = action.payload
    }
=======
    setIsForecastLoading: (state, action) => {
      state.isForecastLoading = action.payload
    },
    setIsStatsLoading: (state, action) => {
      state.isStatsLoading = action.payload
    },
>>>>>>> d86e4889a902e455515452c78302bc1493f0c0df
  },
})

export default dataReducer.reducer
export const {
  setCities,
  setSelectedCity,
  setShops,
  setSelectedShop,
  addSelectedShops,
  removeSelectedShops,
  setCategories,
  setSelectedCategories,
  setForeCast,
  addSelectedCategories,
  removeSelectedCategories,
<<<<<<< HEAD
  setStats
=======
  setIsForecastLoading,
  setIsStatsLoading,
>>>>>>> d86e4889a902e455515452c78302bc1493f0c0df
} = dataReducer.actions
