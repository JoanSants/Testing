import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import RootReducer from './reducers';

export const middlewears = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewears)(createStore)

export const store = createStoreWithMiddleware(RootReducer);