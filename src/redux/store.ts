import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    //  reducerにcounterプロパティにsliceを登録
    counter: counterReducer,
  },
});
