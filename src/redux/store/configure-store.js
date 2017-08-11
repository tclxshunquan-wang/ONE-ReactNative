/**
 * 创建Store,整合Provider
 *  create by 2017-01-10
 * @flow
 */
'use strict';

const createLogger = require('redux-logger');


import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers/Index';

const middlewares = [thunk.withExtraArgument()];
const middleware = applyMiddleware(...middlewares);


if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
}

let store = createStore(rootReducer, {}, middleware);

export default store;