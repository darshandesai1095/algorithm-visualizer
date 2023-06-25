import { createSlice } from '@reduxjs/toolkit'

const randomNumber = Math.floor(Math.random()*8)
const sortingAlgorithms = [
  "Bubble Sort", "Cocktail Sort", "Heap Sort", "Insertion Sort",
  "Merge Sort", "Shell Sort", "Selection Sort", "Quick Sort"
]

const initialState = {
    value: sortingAlgorithms[randomNumber]
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