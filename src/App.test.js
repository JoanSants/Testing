import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, testStore } from './../utils';
import App from './App.js';

const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	return shallow(<App store={store} />).childAt(0).dive();

};

describe('App Component', () => {
	let wrapper;
	beforeEach(() => {
		const initialState = {
			posts: [
				{
					title: 'Title 1',
					body: 'Body'
				},
				{
					title: 'Title 2',
					body: 'Body'
				}
			]
		}

		wrapper = setUp(initialState);
	});

	it('Should render without errors', () => expect(findByTestAttr(wrapper, 'App').length).toBe(1));

	it('toggleButton method should update state as expected', () => {
		const appInstance = wrapper.instance();
		appInstance.toggleButton();
		expect(appInstance.state.showButton).toBe(false);
	})

	it('returnNumberPlusOne should return the value expected', () => {
		expect(wrapper.instance().returnNumberPlusOne(5)).toBe(6);
	});
});