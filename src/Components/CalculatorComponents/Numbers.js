import './numbers.css';
import React, { useState } from 'react';


const Numbers = () =>{

    let [numberValue, setNumberValue] = useState(0);

    function handleNumberValue(event){
        setNumberValue(event.target.value);
        console.log(numberValue);
    }

    return(
        <div className='numbersPosition'>
            <button type='button' className='n9'id='9' value={9} onClick={handleNumberValue} > 9 </button>
            <button type='button' className='n8'id='8'value={8} onClick={handleNumberValue} > 8 </button>
            <button type='button' className='n7'id='7'value={7} onClick={handleNumberValue}  > 7 </button>

            <button type='button' className='n6'id='6' value={6} onClick={handleNumberValue}> 6 </button>
            <button type='button' className='n5'id='5' value={5} onClick={handleNumberValue}> 5 </button>
            <button type='button' className='n4'id='4' value={4} onClick={handleNumberValue}> 4 </button>

            <button type='button' className='n3'id='3' value={3} onClick={handleNumberValue}> 3 </button>
            <button type='button' className='n2'id='2' value={2} onClick={handleNumberValue}> 2 </button>
            <button type='button' className='n1'id='1' value={1} onClick={handleNumberValue}> 1 </button>

            <button type='button' className='n0'id='0' value={0} onClick={handleNumberValue}> 0 </button>
            <button type='button' className='nDot'id='Dot' value={'.'} onClick={handleNumberValue } > . </button>
        </div>
    );
}

export default Numbers;