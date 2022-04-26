import './numbers.css';
import React, { useState } from 'react';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';


const Numbers = () =>{

    let [numberValue, setNumberValue] = useState();

    const clickHander = (e) =>{
        setNumberValue(e.target.value);
        console.log(e.target.value);
    }


    return(
        <div className='numbersPosition'>
            <button type='button' className='n9'id='9' value={9} onClick={e => clickHander(e, "value")}> 9 </button>
            <button type='button' className='n8'id='8' value={8} onClick={e => clickHander(e, "value")}> 8 </button>
            <button type='button' className='n7'id='7' value={7} onClick={e => clickHander(e, "value")}> 7 </button>

            <button type='button' className='n6'id='6' value={6} onClick={e => clickHander(e, "value")}> 6 </button>
            <button type='button' className='n5'id='5' value={5} onClick={e => clickHander(e, "value")}> 5 </button>
            <button type='button' className='n4'id='4' value={4} onClick={e => clickHander(e, "value")}> 4 </button>

            <button type='button' className='n3'id='3' value={3} onClick={e => clickHander(e, "value")}> 3 </button>
            <button type='button' className='n2'id='2' value={2} onClick={e => clickHander(e, "value")}> 2 </button>
            <button type='button' className='n1'id='1' value={1} onClick={e => clickHander(e, "value")}> 1 </button>

            <button type='button' className='n0'id='0' value={0} onClick={e => clickHander(e, "value")}> 0 </button>
            <button type='button' className='nDot'id='Dot' value={'.'} onClick={e => clickHander(e, "value")}> . </button>
        </div>
    );
}

export default Numbers;