import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form className="form-group">
        <label htmlFor="formEventTitle">タイトル</label>
        <input className="form-control" id="formEventTitle" />
      </form>
      <form className="form-group">
        <label htmlFor="formEventBody">ボディ</label>
        <textarea className="form-control" id="formEventBody" />
      </form>
      <button className="btn btn-primary">イベント作成</button>&nbsp;
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
