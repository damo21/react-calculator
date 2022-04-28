import './numbers.css';
import React, { useState } from 'react';

//displayInTextbox is a parent component function
const Numbers = ({ displayNumberInTextbox }) => {
    return (
        <div className='numbersPosition'>
            {/* mapped buttons to create smaller duplication of code */}
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
                    <button
                    //set the key (works like an ID)
                        key={`button-number-${number}`}
                        type='button'
                        //the classname is unique to each number with n and then the number
                        className={`n${number}`} id={`${number}`}
                        //value is set to the number in the mapping
                        value={number}
                        //calls function from parent class and sets it on click
                        onClick={() => displayNumberInTextbox(`${number}`)}
                    >
                        {/* displays number based on map */}
                        {`${number}`}
                    </button>
                ))
            }
            <button type='button' className='nDot' id='Dot' value={'.'} onClick={e => displayNumberInTextbox(e.target.value)}> . </button>
        </div>
    );
}

export default Numbers;