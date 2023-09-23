import { combineReducers } from 'redux'
import counterReducer from './counterSlice'
import sliderReducer from './productSlices/slidersSlices'

const rootReducer = combineReducers({
  counter: counterReducer,
  stateSlider: sliderReducer
})

export default rootReducer
