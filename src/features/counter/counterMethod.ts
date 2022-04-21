import { useAppDispatch } from "../../app/hooks";
import { decrease, increase, incrementByAmount } from "./counterSlice";

export const useCount = () => {
  // ActionCreatorをdispatchで発火してイベントハンドラを生成
  //   {payload,type}を返す
  const dispatch = useAppDispatch();
  const Mup = () => dispatch(increase() || 0);
  const Mdown = () => dispatch(decrease() || 0);
  const MincrementByAmount = (value: number) =>
    dispatch(incrementByAmount(value) || 0);

  return { Mup, Mdown, MincrementByAmount };
};
