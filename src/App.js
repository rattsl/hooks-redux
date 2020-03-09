import React, { useState } from 'react';

const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;
  return (
    <>
      <p>
        現在{name}は,{price}円です。
      </p>
      <div>
        <button onClick={() => setState({ ...state, price: price + 1 })}>
          +1
        </button>
        <button onClick={() => setState({ ...state, price: price - 1 })}>
          -1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setState(props);
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <input
          value={name}
          onChange={e => setState({ ...state, name: e.target.value })}
        />
      </div>
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000
};

export default App;
