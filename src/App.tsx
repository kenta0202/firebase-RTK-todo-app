import React from "react";
import {
  useSelector,
  useDispatch /* DefaultRootState */ /* RootStateOrAny */,
} from "react-redux";
import { RootState } from "./interface";
import { decrease, increase } from "./redux/counterSlice";

function App() {
  // state.counterはstore.tsのreducerに設定したもの
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
    </div>
  );
}

export default App;
