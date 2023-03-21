import { configureStore } from '@reduxjs/toolkit'
import photosReducer from './reducers/photosSlice'


export default configureStore({
  reducer: {
    photos: photosReducer,
  },
})