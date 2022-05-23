import React, { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("me volvi a generar desde ShowIncrement :(");
  return <button onClick={() => increment(5)}>Incrementar</button>;
});
