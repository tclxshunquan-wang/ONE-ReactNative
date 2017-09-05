/**
 * 创建Store,整合Provider
 *  create by 2017-01-10
 * @flow
 */
import thunk from 'redux-thunk';

import {createStore, applyMiddleware,compose} from 'redux';

import _middleware from "../middleware"

import rootReducer from '../reducers/Index';

const _thunk = [thunk.withExtraArgument()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(
    applyMiddleware(
        ..._middleware.concat(_thunk)
    )
));

export default store;