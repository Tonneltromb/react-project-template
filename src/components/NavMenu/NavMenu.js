import React from 'react';
import PropTypes from 'prop-types';

import './NavMenu.css'
import NavItem, {DropStrategy} from "./NavItem/NavItem";

const NavMenu = (props) => {
    const dropMenuItems = [
        {
            title: '1',
            navigateTo: '/1',
            dropMenuItems: [
                {
                    title: '3',
                    navigateTo: '/3'
                },
                {
                    title: '4',
                    navigateTo: '/4'
                },
                {
                    title: '5',
                    navigateTo: '/5'
                }
            ]
        },
        {
            title: '2',
            navigateTo: '/2',
            dropMenuItems: [
                {
                    title: '3',
                    navigateTo: '/3'
                },
                {
                    title: '4',
                    navigateTo: '/4'
                }
            ]
        }
    ];
    return (
        <div className='NavMenu'>
            <NavItem
                title='На главную'
                navigateTo='/'/>
            <NavItem
                title='Новости'
                navigateTo='/news'/>
            <NavItem
                title='Примеры'
                navigateTo='/examples'
                dropMenuItems={dropMenuItems}
                dropStrategy={DropStrategy.bottom}/>
        </div>
    );
};

NavMenu.propTypes = {
    items: PropTypes.array
};

export default NavMenu;