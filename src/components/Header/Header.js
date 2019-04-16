import React, {useEffect} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

import './Header.css'
import * as SvgHolder from '../../common/svg.holder';
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
                    {SvgHolder.expand_menu_button}
                </div>
            </CSSTransition>
        </React.Fragment>
    );
};

Header.propTypes = {
    expand: PropTypes.bool.isRequired
};

export default Header;