import * as ActionTypes from './Type';

export function updateA (b) {
    return function (dispatch){
        dispatch ({
            type : 'UPDATE_A', value : b
        });
    }
}

export function updateB (a) {
    return function (dispatch){
        dispatch ({
            type : 'UPDATE_B', value : a
        });
    }
}


