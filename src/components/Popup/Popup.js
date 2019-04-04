import React from 'react';
import './Popup.css';
import * as popupService from '../../service/popup.service';

const Popup = props => {
    return (
        <div id='Popup'>
            <div className='Popup__content'>
                <div className={'Popup__message'}> </div>
                <button onClick={popupService.hide}>Hide</button>
            </div>
        </div>
    );
};

export default Popup;