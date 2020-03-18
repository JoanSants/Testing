import React from 'react';

import './index.scss';
import logo from '../../assets/png/leon.jpg';

const Header = () => (
    <header data-test="Header">
        <img src={logo} alt="logo" data-test="Logo" />
    </header>
);

export default Header;