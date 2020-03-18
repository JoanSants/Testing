import React from 'react';
import { shallow } from 'enzyme';

import Header from './index.js';
import { findByTestAttr } from '../../../utils';

const setup = (props = {}) => shallow(<Header {...props} />);

describe('Heder Component', () => {
    let component;
    beforeEach(() => component = setup());

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, "Header");
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, "Logo");
        expect(logo.length).toBe(1);
    })
})