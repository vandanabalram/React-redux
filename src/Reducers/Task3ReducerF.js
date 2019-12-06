import *as ActionTypes from '../Actions/Type';

const initialstate = {
  ageF: 1
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_F:
      {
        return { ...state, ageF: state.ageF + action.value };
      }
    default:
      return state;
  }
}