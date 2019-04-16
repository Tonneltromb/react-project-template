import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './NavItem.css'

export const DropStrategy = {top: 1, bottom: 'bottom', left: 'left', right: 4};

const NavItem = (props) => {
    const [onHover, setOnHover] = useState(false);
    return (
        <div className={props.itemClass}
             onMouseOver={() => setOnHover(true)}
             onMouseLeave={() => setOnHover(false)}
        >
            {props.title}
            {props.dropMenuItems && props.dropMenuItems.length && onHover
                ? (
                    <div className={`NavItem__dropMenu ${props.dropStrategy}-strategy`}>
                        {props.dropMenuItems.map((item) => {
                            return (
                                <NavItem
                                    itemClass={props.dropMenuItemClass}
                                    title={item.title}
                                    dropMenuItemClass={props.dropMenuItemClass}
                                    dropStrategy={DropStrategy.left}
                                    dropMenuItems={item.dropMenuItems}/>
                            );
                        })}
                    </div>
                )
                : null
            }
        </div>
    );
};

NavItem.propTypes = {
    itemClass: PropTypes.string,
    dropMenuItemClass: PropTypes.string,
    title: PropTypes.string,
    navigateTo: PropTypes.string,
    dropMenuItems: PropTypes.array,
    dropStrategy: PropTypes.string
};
NavItem.defaultProps = {
    itemClass: 'NavItem',
    dropMenuItemClass: 'DropMenuNavItem'
};


export default NavItem;