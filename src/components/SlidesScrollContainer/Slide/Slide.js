import React from 'react';
import PropTypes from 'prop-types';

import './Slide.css';

const Slide = props => {
    return (
        <div className='Slide'
             style={{
                 background: `url(${props.image}) center / cover no-repeat border-box`
             }}>
        </div>
    );
};

Slide.propTypes = {
    image: PropTypes.string,
};

export default Slide;