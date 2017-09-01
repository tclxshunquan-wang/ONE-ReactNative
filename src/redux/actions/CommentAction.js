import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import _ from "lodash"

export const add=createAction(types.ADD,()=>{
    return {
        payload:{
            message:"Redux ADD"
        }
    }
});

export const del=createAction(types.DEL,()=>{});

export const showErrorDialog=createAction(types.ERROR,(param)=>{
    alert(param);
    let id=_.uniqueId();
    return {
        id:id,
        msg:param
    }
});