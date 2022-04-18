import { useAppDispatch } from "../../app/hooks";
import {
  decrease,
  increase,
  incrementByAmount,
} from "../../features/counter/counterSlice";

export const useCount = () => {
  // ActionCreatorをdispatchで発火してイベントハンドラを生成
  //   {payload,type}を返す
  const dispatch = useAppDispatch();
  const Aup = () => dispatch(increase() || 0);
  const Adown = () => dispatch(decrease() || 0);
  const AincrementByAmount = (value: number) =>
    dispatch(incrementByAmount(value) || 0);

  return { Aup, Adown, AincrementByAmount };
};
