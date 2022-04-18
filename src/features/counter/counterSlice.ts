import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// RootStateの型
export type TRootState = {
  // sliceの一つ
  counter: TCountState;
};

//Counterの型
export type TCountState = {
  count: number;
};

// CounterのStateの初期値
const initialState: TCountState = {
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
    // Stateを返す
    increase: (state) => {
      const count = state.count + 1;
      return { ...state, count };
    },
    decrease: (state) => {
      const count = state.count - 1;
      return { ...state, count };
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      const count = state.count + action.payload;
      return { ...state, count };
    },
  },
});

// Stateを引数にStateのcountプロパティの値を切り出す
export const selectCount = (state: TRootState) => state.counter.count;

// Actionを切り出す
export const { increase, decrease, incrementByAmount } = counterSlice.actions;

// Recuderを切り出す
export default counterSlice.reducer;
