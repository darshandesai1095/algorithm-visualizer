import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "Merge Sort"
}

export const algorithmSlice = createSlice({
  name: 'algorithm',
  initialState,
  reducers: {
    setAlgorithm: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAlgorithm } = algorithmSlice.actions

export default algorithmSlice.reducer