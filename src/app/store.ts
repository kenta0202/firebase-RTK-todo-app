import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import taskReducer from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    //  reducerのcounterプロパティにsliceを登録
    counter: counterReducer,
    task: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  unknown,
  Action<string>
>;
