import './numbers.css';


const Numbers = () =>{
    return(
        <div className='numbersPosition'>
            <button type='button' className='n9'id='9'> 9 </button>
            <button type='button' className='n8'id='8'> 8 </button>
            <button type='button' className='n7'id='7'> 7 </button>

            <button type='button' className='n6'id='6'> 6 </button>
            <button type='button' className='n5'id='5'> 5 </button>
            <button type='button' className='n4'id='4'> 4 </button>

            <button type='button' className='n3'id='3'> 3 </button>
            <button type='button' className='n2'id='2'> 2 </button>
            <button type='button' className='n1'id='1'> 1 </button>

            <button type='button' className='n0'id='0'> 0 </button>
            <button type='button' className='nDot'id='Dot'> . </button>
        </div>
    );
}

export default Numbers;