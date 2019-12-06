import * as ActionTypes from './Type';

export function updateC(e) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_C', value: e
    });
  }
}

export function updateD(f) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_D', value: f
    });
  }
}

export function updateE(c) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_E', value: c
    });
  }
}

export function updateF(d) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_F', value: d
    });
  }
}


