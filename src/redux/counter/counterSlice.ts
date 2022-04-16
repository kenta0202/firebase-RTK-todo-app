import { createSlice } from "@reduxjs/toolkit";
import { countStateType } from "../../interface";

const initialState: countStateType = {
  count: 0,
};
//Slice:actionとreducerのロジックを統合したもののこと
export const counterSlice = createSlice({
  // Reducer名
  name: "counter",
  // 初期値
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

// Actionを切り出す
export const { increase, decrease } = counterSlice.actions;

// Recuderを切り出す
export default counterSlice.reducer;
