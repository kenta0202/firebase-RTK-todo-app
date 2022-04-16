import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../interface";
import { useCount } from "./hooks";

function Counter() {
  // state.counterはstore.tsのreducerに設定したもの
  const count = useSelector((state: RootState) => state.counter.count);
  const { up, down } = useCount();
  console.log(count);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
    </div>
  );
}

export default Counter;
