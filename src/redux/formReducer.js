import {createSlice} from "@reduxjs/toolkit";

const formReducer = createSlice({
  name: 'formReducer',
  initialState: {
    login: '',
    password: '',
    errors: {
      login: '',
      password: ''
    },
    isValid: false
  },
  reducers: {
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
export const {changeLogin, changePassword, changeErrorLogin, changeErrorPassword, checkValid} = formReducer.actions
