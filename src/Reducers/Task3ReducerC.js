import *as ActionTypes from '../Actions/Type';

const initialstate = {
  ageC: 1
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_C:
      {
        return { ...state, ageC: state.ageC + action.value };
      }
    default:
      return state;
  }
}