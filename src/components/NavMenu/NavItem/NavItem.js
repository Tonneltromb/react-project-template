import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './NavItem.css'
import CSSTransition from "react-transition-group/CSSTransition";

export const DropStrategy = {top: 1, bottom: 'bottom', left: 'left', right: 4};

const NavItem = (props) => {
    const [onHover, setOnHover] = useState(false);
    const [onMenuEntered, setOnMenuEntered] = useState(false);
    return (
        <div className={props.itemClass}
             onMouseOver={() => setOnHover(true)}
             onMouseLeave={() => setOnMenuEntered(false)}
        >
            {props.title}
            {props.dropMenuItems && props.dropMenuItems.length
                ? (
                    <CSSTransition
                        mountOnEnter
                        unmountOnExit
                        in={onHover}
                        timeout={100}
                        onEntered={() => setOnMenuEntered(true)}
                        classNames={{
                            enterActive: 'show-expand-menu-button',
                            exitActive: 'hide-expand-menu-button'
                        }}>
                        <div className={`NavItem__dropMenu ${props.dropStrategy}-strategy`}>
                            {props.dropMenuItems.map((item) => {
                                return (
                                    <CSSTransition
                                        mountOnEnter
                                        unmountOnExit
                                        in={onMenuEntered}
                                        timeout={100}
                                        onExited={() => setOnHover(false)}
                                        classNames={{
                                            enterActive: 'show-expand-menu-button',
                                            exitActive: 'hide-expand-menu-button'
                                        }}>
                                        <NavItem
                                            itemClass={props.dropMenuItemClass}
                                            title={item.title}
                                            dropMenuItemClass={props.dropMenuItemClass}
                                            dropStrategy={DropStrategy.left}
                                            dropMenuItems={item.dropMenuItems}/>
                                    </CSSTransition>
                                );
                            })}

                        </div>
                    </CSSTransition>
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