import * as types from '../constants/ActionTypes';

//设置描述
export function setDis(params) {
    return {
        type: types.SETDIS,
        params:params
    }
}
export function del1() {
    return {
        type: types.DEL
    }
}