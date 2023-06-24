import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

export const toggleRerunSlice = createSlice({
  name: 'toggleRerun',
  initialState,
  reducers: {
    toggleRerun: (state) => {
      state.value = !state.value
    },
  },
})

export const { toggleRerun } = toggleRerunSlice.actions

export default toggleRerunSlice.reducer