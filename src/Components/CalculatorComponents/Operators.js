import './operators.css'

const Operators = () => {
    return(
        <div className='operatorsBackground'>
            <button type='button' className='AC'id='AC'> A/C </button>
            <button type='button' className='C'id='C'> C </button>

            <button type='button' className='Plus'id='Plus'> + </button>
            <button type='button' className='Subtract'id='Subtract'> - </button>


            <button type='button' className='Divide'id='Dive'> ÷ </button>
            <button type='button' className='Multiply'id='Multiply'> X </button>

            <button type='button' className='Equals'id='Equals'> = </button>
        </div>
    );
}

export default Operators;