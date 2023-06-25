import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        iterations: 0,
        comparisons: 0,
        swaps: 0,
        shifts: 0
    }
}

export const metadataSlice = createSlice({
  name: 'metaData',
  initialState,
  reducers: {
    incrementIterations: (state, action) => {
      state.value = action.payload
    },
    incrementComparisons: (state, action) => {
        state.value = action.payload
    },
    incrementSwaps: (state, action) => {
        state.value = action.payload
    },
    incrementShifts: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { 
    incrementIterations, 
    incrementComparisons,
    incrementSwaps, 
    incrementShifts } = metadataSlice.actions

export default metadataSlice.reducer