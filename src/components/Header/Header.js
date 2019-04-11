import React, {useEffect} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

import './Header.css'
import NavMenu from "../NavMenu/NavMenu";

const Header = (props) => {
    useEffect(() => {
        console.log('Header componentDidMount');
    }, []);
    return (
        <React.Fragment>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={props.expand}
                timeout={500}
                classNames={{
                    enterActive: 'show-nav-menu-button',
                    exitActive: 'hide-nav-menu-button'
                }}>
                <div className='Header-expand'>
                    <NavMenu/>
                </div>
            </CSSTransition>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={!props.expand}
                timeout={500}
                classNames={{
                    enterActive: 'show-expand-menu-button',
                    exitActive: 'hide-expand-menu-button'
                }}>
                <div className='Header-collapse'>
                    <svg id="expand_menu_button" viewBox="0 0 318 318" fill='rgba(0,0,0,0.3)'>
                        <g>
                            <path
                                d="M68,3H15C6.729,3,0,9.729,0,18v53c0,8.271,6.729,15,15,15h53c8.271,0,15-6.729,15-15V18C83,9.729,76.271,3,68,3z"/>
                            <path
                                d="M185,3h-53c-8.271,0-15,6.729-15,15v53c0,8.271,6.729,15,15,15h53c8.271,0,15-6.729,15-15V18C200,9.729,193.271,3,185,3z"/>
                            <path
                                d="M303,3h-53c-8.271,0-15,6.729-15,15v53c0,8.271,6.729,15,15,15h53c8.271,0,15-6.729,15-15V18C318,9.729,311.271,3,303,3z"/>
                            <path
                                d="M68,117H15c-8.271,0-15,6.729-15,15v53c0,8.271,6.729,15,15,15h53c8.271,0,15-6.729,15-15v-53	C83,123.729,76.271,117,68,117z"/>
                            <path
                                d="M185,117h-53c-8.271,0-15,6.729-15,15v53c0,8.271,6.729,15,15,15h53c8.271,0,15-6.729,15-15v-53C200,123.729,193.271,117,185,117z"/>
                            <path
                                d="M303,117h-53c-8.271,0-15,6.729-15,15v53c0,8.271,6.729,15,15,15h53c8.271,0,15-6.729,15-15v-53C318,123.729,311.271,117,303,117z"/>
                            <path
                                d="M68,232H15c-8.271,0-15,6.729-15,15v53c0,8.272,6.729,15,15,15h53c8.271,0,15-6.728,15-15v-53C83,238.729,76.271,232,68,232z"/>
                            <path
                                d="M185,232h-53c-8.271,0-15,6.729-15,15v53c0,8.272,6.729,15,15,15h53c8.271,0,15-6.728,15-15v-53C200,238.729,193.271,232,185,232z"/>
                            <path
                                d="M303,232h-53c-8.271,0-15,6.729-15,15v53c0,8.272,6.729,15,15,15h53c8.271,0,15-6.728,15-15v-53C318,238.729,311.271,232,303,232z"/>
                        </g>
                    </svg>
                </div>
            </CSSTransition>
        </React.Fragment>
    );
};

Header.propTypes = {
    expand: PropTypes.bool.isRequired
};

export default Header;