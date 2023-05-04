import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   data: []
}

const HomeSlice = createSlice({
   name: "home",
   initialState,
   reducers: {
      populate: (state, action) => {
         state.data = action.payload
      },
   }
})

export const { populate } = HomeSlice.actions
export default HomeSlice.reducer