import React, { useState } from 'react';

const App = props => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  return (
    <>
      <p>
        現在{name}は,{price}円です。
      </p>
      <div>
        <button onClick={() => setPrice(price + 1)}>+1</button>
        <button onClick={() => setPrice(price - 1)}>-1</button>
      </div>
      <div>
        <button
          onClick={() => {
            setPrice(props.price);
            setName(props.name);
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
    </>
  );
};

App.defaultProps = {
  name: 'apple',
  price: 1000
};

export default App;
