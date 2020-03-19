import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils'
import HeadLine from './index';

const setup = (props = {}) => shallow(<HeadLine {...props} />);

describe('Headline Component', () => {
	describe('Have props', () => {
		let component;
		beforeEach(() => component = setup({
			header: 'Header',
			desc: 'Description'
		}));

		it('Should render without errors', () => {
			const wrapper = findByTestAttr(component, 'Headline');
			expect(wrapper.length).toBe(1);
		});

		it('Should render a header', () => {
			const header = findByTestAttr(component, 'header');
			expect(header.length).toBe(1);
		});

		it('Should reder a description', () => {
			const desc = findByTestAttr(component, 'desc');
			expect(desc.length).toBe(1)
		});
	});

	describe('Have NO props', () => {
		let component;
		beforeEach(() => component = setup());

		it('Should not render', () => {
			const wrapper = findByTestAttr(component, 'Headline');
			expect(wrapper.length).toBe(0);
		});
	});
});