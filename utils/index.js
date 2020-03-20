import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from './../src/reducers';
import { middlewears } from  './../src/createStore';

export const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`);

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export const testStore = initialState => {
	const createStoreWithMiddleware = applyMiddleware(...middlewears)(createStore);
	return createStoreWithMiddleware(rootReducer, initialState);
}