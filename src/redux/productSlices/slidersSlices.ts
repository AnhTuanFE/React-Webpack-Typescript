import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import type { PayloadAction } from '@reduxjs/toolkit'

interface Slider {
  _id: number
  url: string
  // eslint-disable-next-line
  createdAt: any | Date
  // eslint-disable-next-line
  updatedAt: any | Date
  __v: number
}

interface SlidersState {
  data: Slider[]
  loading: boolean
  error: string | null
}

const initialState: SlidersState = {
  data: [],
  loading: false,
  error: null
}

export const fetchSliders = createAsyncThunk('sliders/fetchSliders', async () => {
  const response = await axios.get('https://d981-14-186-238-117.ngrok-free.app/api/slider')
  return response.data
})

const slidersSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliders.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchSliders.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(fetchSliders.rejected, (state, action) => {
        state.loading = false
        state.data = []
        state.error = action.error.message || 'Error occurred while fetching sliders.'
      })
  }
})

export default slidersSlice.reducer
