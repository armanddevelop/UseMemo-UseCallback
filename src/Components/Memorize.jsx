import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";
export const Memorize = () => {
  const initialState = 10;
  const { counter, increment } = useCounter(initialState);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h2>
        Memorize Counter: <Small value={counter} />
      </h2>
      <hr />
      <button onClick={() => increment()}>Increment Counter</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
