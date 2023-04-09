import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: false,
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
   
  },
})

// Action creators are generated for each case reducer function
export const { openModal , closeModal } = themeSlice.actions

export default themeSlice.reducer