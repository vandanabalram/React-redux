import *as ActionTypes from '../Actions/Type';

const initialstate = {
  ageE: 1
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_E:
      {
        return { ...state, ageE: state.ageE + action.value };
      }
    default:
      return state;
  }
}