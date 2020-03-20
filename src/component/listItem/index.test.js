import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './index';
import { checkProps, findByTestAttr } from '../../../utils';

const setup = (props = {}) => shallow(<ListItem {...props} />);

describe('ListItem Component', () => {
	describe('Checking PropTypes', () => {
		it('Should NOT throw warning', () => {
			expect(checkProps(ListItem, { title: 'Title', paragraph: 'Paragraph' })).toBeUndefined();
		})
	});

	describe('Component Renders', () => {
		let wrapper;
		beforeEach(() => wrapper = setup({
			title: 'Title',
			paragraph: 'Paragraph'
		}));

		it('Should render without error', () => {
			expect(findByTestAttr(wrapper, 'ListItem').length).toBe(1);
		});

		it('Should render a title', () => {
			expect(findByTestAttr(wrapper, 'title').length).toBe(1);
		})

		it('Should render a paragraph', () => {
			expect(findByTestAttr(wrapper, 'paragraph').length).toBe(1);
		})
	})

	describe('Component NOT render', () => {
		let wrapper;
		beforeEach(() => wrapper = setup({ paragraph: 'Paragraph' }));

		it('Should not render', () => {
			expect(findByTestAttr(wrapper, 'ListItem').length).toBe(0);
		});
	})
})
