import *as ActionTypes from '../Actions/Type';

const initialstate = {
  ageD: 1
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_D:
      {
        return { ...state, ageD: state.ageD + action.value };
      }
    default:
      return state;
  }
}