import * as types from '../constants/ActionTypes';

const initialState = {

 sum:0

};

export default function homeReducer(state = initialState, action = {}) {
    switch (action.type){

        case types.ADD:
            return{
                ...state,
                sum:initialState.sum++
            };
            break;
        case types.DEL:
            return{
                ...state,
                sum:initialState.sum--
            };
            break;
        default:
            return state;
            break;
    }

}