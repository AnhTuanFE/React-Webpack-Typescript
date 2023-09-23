import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const productSlices = createSlice({
  name: 'product',
  initialState: {},
  reducers: {
    addProduct: (state) => {
      value: 2
    }
  },
  extraReducers: {
    getSlider: (state) => {
      const data: any = axios.get('/api/getproducts', {})
      return {
        dataProduct: data
      }
    }
  }
})
export const { addProduct } = productSlices.actions
export default productSlices.reducer
