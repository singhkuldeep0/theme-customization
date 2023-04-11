import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: false,
  fontSize:{
    xs:'10px',
    sm:'12px',
    base:'14px',
    lg:'16px',
    xl:'18px',
    xxl:'20px',
    xxxl:'26px',
    xxxxl:'32px',
    xxxxxl:'42px',
    xxxxxxl:'48px',
  },
  color:'#1D9BF0',
  background:{
    secondary: '#ffffff',
    primary: '#d0d0d0',
    textprimary: '#4a4a4a',
    textsecondary: '#000000',
  },
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true
    },
   closeModal:(state) => {
    state.modal = false
   },
   setFontSize: (state , action) => {
    state.fontSize = action.payload
  },
  setColor: (state , action) => {
    state.color = action.payload
  },
  setBackground: (state , action) => {
    state.background = action.payload
  },
   
  },
})

// Action creators are generated for each case reducer function
export const { openModal , closeModal , setFontSize , setBackground , setColor } = themeSlice.actions

export default themeSlice.reducer