import React, {useState} from "react";
import "./Counter.css"

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="Counter">
      <button className="Button" onClick={() => setCounter(counter + 1)}>+</button>
      <button className="Button" onClick={() => setCounter(counter - 1)}>-</button>
      <p className="Result">{counter}</p>
    </div>
  );
}

export default Counter;