import React, { useState, useEffect } from 'react';

const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  //第一引数飲みだとレンダリングされた後に毎回呼ばれる
  useEffect(() => {
    console.log('useEffect is invoked');
  });

  //第二引数に空の配列を入れると初回のレンダリング後にしか呼ばれなくなる。
  useEffect(() => {
    console.log('this function id invoked one time');
  }, []);

  //nameの状態が変わるたびに再レンダされる
  useEffect(() => {
    console.log('this callback is for name only');
  }, [name]);

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
