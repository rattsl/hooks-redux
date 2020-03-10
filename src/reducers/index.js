//状態をイメージする

// #bafore
//  state = []
// #after
//  state = [
//    {id: 1, title: "title1", body: "boby1"}
//  ]

// #bafore
//  state = [{id: 1, title: "title1", body: "body1"}]
// #after
//  state = [
//    {id: 1, title: "title1", body: "boby1"}
//    {id: 2, title: "title2", body: "boby2"}
//  ]

import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions';

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      //どういうイベントが流れ込んでくるか考える
      const event = { title: action.title, body: action.body };
      //その時のstateの要素を条件分岐させる
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      //要理解
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
