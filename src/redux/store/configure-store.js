/**
 * 创建Store,整合Provider
 *  create by 2017-01-10
 * @flow
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import _middleware from "../middleware"

import rootReducer from '../reducers/Index';

const _thunk = [thunk.withExtraArgument()];
const store = applyMiddleware(..._middleware.concat(_thunk))(createStore)(rootReducer);

export default store;