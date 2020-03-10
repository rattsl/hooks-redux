import React from 'react';
import { DELETE_EVENT } from '../actions';

const Event = ({ event, dispatch }) => {
  const id = event.id;
  const hundleClickDeleteButton = () => {
    const result = window.confirm(
      `このイベント(id=${id})を削除してもよろしいですか？`
    );
    if (result)
      dispatch({
        type: DELETE_EVENT,
        id
      });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={hundleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
