import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './slices/HomeSlice';

const reducer = {
  
   home: homeReducer
}

export const store = configureStore({
   reducer
})