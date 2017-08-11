/**
 * Created by zhang on 2016/8/22.
 */
'use strict';
import { combineReducers } from 'redux';
import  navReducer from './NavReducer';
import  reduxReducer from './ReduxReducer'
import  homeReducer from './HomeReducer'
import  secondReducer from './SecondReducer'
export default combineReducers({
    navReducer:navReducer,
    reduxReducer:reduxReducer,
    secondReducer:secondReducer,
    homeReducer:homeReducer
});