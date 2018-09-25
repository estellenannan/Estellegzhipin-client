//redux最核心的管理对象

import reducers from './reducers';

import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))