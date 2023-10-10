import {createSlice} from "@reduxjs/toolkit";

const formReducer = createSlice({
  name: 'formReducer',
  initialState: {
    isLoggedIn: false,
    login: '',
    password: '',
    errors: {
      login: '',
      password: ''
    },
    isValid: false
  },
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload
    },
    changeLogin(state, action) {
      state.login = action.payload
    },
    changePassword(state, action) {
      state.password = action.payload
    },
    changeErrorLogin(state, action) {
      state.errors.login = action.payload
    },
    changeErrorPassword(state, action) {
      state.errors.password = action.payload
    },
    checkValid(state, action) {
      state.isValid = action.payload
    }
  }
})

export default formReducer.reducer
export const {
  setLoggedIn,
  changeLogin,
  changePassword,
  changeErrorLogin,
  changeErrorPassword,
  checkValid
} = formReducer.actions
