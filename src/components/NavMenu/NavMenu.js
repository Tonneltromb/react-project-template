import React from 'react';
import PropTypes from 'prop-types';

import './NavMenu.css'
import NavItem from "./NavItem/NavItem";

const NavMenu = (props) => {
    return (
        <div className='NavMenu'>
            <NavItem title='На главную' navigateTo='/' />
            <NavItem title='Новости' navigateTo='/news' />
        </div>
    );
};

NavMenu.propTypes = {

};

export default NavMenu;