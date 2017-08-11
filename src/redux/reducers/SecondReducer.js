import * as types from '../constants/ActionTypes';

const initialState = {
    name:"首页—Redux",
    num:0
};

export default function secondReducer(state = initialState, action = {}) {
    switch (action.type){
        case types.ADD:
            return{
                ...state,
                num:state.num+1,
            };
            break;
        case types.DEL:
            return{
                ...state,
                num:state.num-1,
            };
            break;

        default:
            return state;
            break;
    }

}