import { configureStore } from '@reduxjs/toolkit'
import algorithmSlice from '../features/algorithm/algorithmSlice'
import toggleRerunSlice from '../features/toggleRerunSlice'
import delaySlice from '../features/delaySlice'

export const store = configureStore({
  reducer: {
    algorithm: algorithmSlice,
    toggleRerun: toggleRerunSlice,
    delay: delaySlice
  },
})