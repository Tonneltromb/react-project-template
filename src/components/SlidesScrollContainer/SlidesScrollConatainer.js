import React from 'react';

import './SlidesScrollConatainer.css'
import Slide from "./Slide/Slide";
import bg1 from '../../images/bg3.jpg';
import bg2 from '../../images/bg2.jpg';

const SlidesScrollContainer = (props) => {
    return (
        <div className='SlidesScrollContainer'>
            <Slide image={bg1} />
            <Slide image={bg2}/>
        </div>
    );
};

export default SlidesScrollContainer;