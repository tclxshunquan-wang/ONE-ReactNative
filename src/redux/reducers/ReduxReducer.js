import * as types from '../constants/ActionTypes';

const initialState = {

 sum:0

};

export default function homeReducer(state = initialState, action = {}) {
    switch (action.type){

        case types.ADD:
            state.sum++;
            return{
                ...state,
            };
            break;
        case types.DEL:
            state.sum--;
            return{
                ...state,
            };
            break;
        default:
            return state;
            break;
    }

}