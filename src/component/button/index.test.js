import React from 'react';
import { shallow } from 'enzyme';

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
		beforeEach(() => wrapper = setup({ 
			content: 'content', 
			onClick: () => {}
		}));

		it('Should render a button', () => {	
			const button = findByTestAttr(wrapper, 'Button');
			expect(button.length).toBe(1);
		});
	});
});