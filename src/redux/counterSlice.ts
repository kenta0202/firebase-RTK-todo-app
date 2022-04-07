import { createSlice } from "@reduxjs/toolkit";
import { countStateType } from "../interface";

const initialState: countStateType = {
  count: 0,
};

export const counterSlice = createSlice({
  // Slice: name,initialState,Reducers,Actions Creators
  name: "counter",
  initialState,
  //   Reducers
  reducers: {
    // Actions Creators
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

// Action
export const { increase, decrease } = counterSlice.actions;

// Slice
export default counterSlice.reducer;
