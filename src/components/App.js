import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    //画面全体を再レンダするのではなく、更新必要のあるDOMだけ更新する
    e.preventDefault();
    //状態をdispatchする
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    });
    setBody('');
    setBody('');
  };
  console.log({ state });
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form className="form-group">
        <label htmlFor="formEventTitle">タイトル</label>
        <input
          className="form-control"
          id="formEventTitle"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </form>
      <form className="form-group">
        <label htmlFor="formEventBody">ボディ</label>
        <textarea
          className="form-control"
          id="formEventBody"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </form>
      <button className="btn btn-primary" onClick={addEvent}>
        イベント作成
      </button>
      &nbsp;
      <button className="btn btn-danger">全てのイベントを削除する</button>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default App;
