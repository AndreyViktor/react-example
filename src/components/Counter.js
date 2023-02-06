import React, {useState} from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <p>{counter}</p>
    </div>
  );
}

export default Counter;