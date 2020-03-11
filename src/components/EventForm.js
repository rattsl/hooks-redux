import React, { useState, useContext } from 'react';
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';
const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    //画面全体を再レンダするのではなく、更新必要のあるDOMだけ更新する
    e.preventDefault();
    //状態をdispatchする
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601()
    });
    setTitle('');
    setBody('');
  };
  const deleteAll = e => {
    e.preventDefault();
    const result = window.confirm('全て削除しますよろしいですか？');
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS
      });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'イベントを全て削除しました。',
        operatedAt: timeCurrentIso8601()
      });
    }
  };

  const deleteAllLog = e => {
    e.preventDefault();
    const result = window.confirm('全て削除しますよろしいですか？');
    if (result)
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      });
  };

  const unCreatable = title === '' || body === '';
  const unDeletable = state.events.length === 0;
  return (
    <>
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
      <button
        className="btn btn-primary"
        onClick={addEvent}
        disabled={unCreatable}
      >
        イベント作成
      </button>
      &nbsp;
      <button
        className="btn btn-danger"
        onClick={deleteAll}
        disabled={unDeletable}
      >
        全てのイベントを削除する
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={deleteAllLog}>
        全てのログを削除
      </button>
    </>
  );
};
export default EventForm;
