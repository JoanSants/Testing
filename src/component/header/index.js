import React from 'react';

import './index.scss';
import logo from '../../assets/png/leon.jpg';

const Header = () => (
    <header>
        <div><img src={logo} alt="logo" /></div>
    </header>
);

export default Header;