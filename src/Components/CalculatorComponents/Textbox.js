import '../../App.css';
import React, { useState } from 'react';

//allow number data to come through from parent
const Textbox = ({ numberData }) => {

    return (
        <input
            type="text"
            className='textbox'
            //set value to be = to the value from parent
            value={numberData}
            readOnly={true}
        />
    );
}

export default Textbox;