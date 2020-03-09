export const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      return state;
    case 'DELETE_EVENT':
      return state;
    case 'DELETE_ALL_EVENT':
      return state;
    default:
      return state;
  }
};
