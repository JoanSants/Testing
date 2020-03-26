import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import Button from '../../../src/component/button';
import { findByTestAttr, checkProps } from '../../../utils';

const setup = (props = {}) => shallow(<Button {...props} />);

describe('Button Component', () => {
	describe('Checking PropTypes', () => {
		it('Should not throw a warning', () => {
			expect(checkProps(Button, { content: 'content', onClick: () => {}})).toBeUndefined();
		});
	});

	describe('Renders', () => {
		let wrapper;
		let mockFunc;
		beforeEach(() => {
			mockFunc = jest.fn();
			wrapper = setup({ content: 'content', onClick: mockFunc });
		});

		it('Should render a button', () => {	
			const button = findByTestAttr(wrapper, 'Button');
			expect(button.length).toBe(1);
		});

		it('Should emit callback on click event', () => {
			const button = findByTestAttr(wrapper, 'Button');
			button.simulate('click');
			const callback = mockFunc.mock.calls.length;
			expect(callback).toBe(1);
		});
	});	
});