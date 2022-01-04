/* eslint-disable default-param-last */

const initialState = {};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_DATA':
      return action.payload;
    default:
      return state;
  }
};
export default detailsReducer;
