import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () =>
    setCount(previousCountState => previousCountState + 1);
  const decrement2 = () =>
    setCount(previousCountState => previousCountState - 1);
  const reset = () => setCount(0);
  const double = () => setCount(previousCountState => previousCountState * 2);
  const tree = () =>
    setCount(previousCountState => {
      if (previousCountState % 3 === 0) {
        return previousCountState / 3;
      } else {
        return previousCountState;
      }
    });
  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={double}>x2</button>
        <button onClick={tree}>3の商</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  );
};

export default App;
