import {
  useDispatch /* DefaultRootState */ /* RootStateOrAny */,
} from "react-redux";
import { decrease, increase } from "../../redux/counter/counterSlice";

export const useCount = () => {
  const dispatch = useDispatch();

  const up = () => dispatch(increase());
  const down = () => dispatch(decrease());

  return { up, down };
};
