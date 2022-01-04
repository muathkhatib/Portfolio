/* eslint-disable default-param-last */

const screenReducer = (state = window.innerWidth, action) => {
  switch (action.type) {
    case 'SET_WIDTH':
      return action.payload;
    default:
      return state;
  }
};

export default screenReducer;
