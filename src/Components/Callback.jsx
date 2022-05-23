import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const Callback = () => {
  const [counter, setCounter] = useState(10);
  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  return (
    <div>
      <h2>CallBak: {counter}</h2>
      <ShowIncrement increment={increment} />
      <hr />
    </div>
  );
};
