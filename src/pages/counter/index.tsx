import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useCount } from "../../features/counter/counterActionCreator";
import { selectCount } from "../../features/counter/counterSlice";

const Counter = () => {
  // state
  const count = useSelector(selectCount);
  // イベントハンドラ
  const { Aup, Adown, AincrementByAmount } = useCount();
  console.log(count);

  const [input, setinput] = useState<number>(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinput(Number(e.target.value));
  };
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={Aup}>Up</button>
      <button onClick={Adown}>Down</button>
      <input type="number" value={input} onChange={handleOnChange} />
      <button disabled={input === 0} onClick={() => AincrementByAmount(input)}>
        入力分足す
      </button>
    </div>
  );
};

export default Counter;
