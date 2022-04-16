import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    //  reducerのcounterプロパティにsliceを登録
    counter: counterSlice.reducer,
  },
});
