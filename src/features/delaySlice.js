import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 50
}

export const delaySlice = createSlice({
  name: 'delay',
  initialState,
  reducers: {
    increment: (state) => {
        if (state.value >= 10) {
            state.value = state.value + 10
        }
        if (state.value === 5) {
            state.value = state.value + 5
        } 
    },
    decrement: (state) => {
        if (state.value === 10) {
            state.value = state.value - 5
        }
        if (state.value >= 10) {
            state.value = state.value - 10
        }
        if (state.value === 5) {
            state.value = 5
        }
    },
  },
})

export const { increment, decrement } = delaySlice.actions

export default delaySlice.reducer