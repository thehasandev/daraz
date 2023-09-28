import { configureStore } from '@reduxjs/toolkit'
import cartSlices from './Slices/cartSlices'

export default configureStore({
  reducer: {
    cart : cartSlices
  },
})