import './operators.css'

const Operators = ({ displayOperator, clearFunctions, mathFunction }) => {

    return(
        <div className='operatorsBackground'>
            {
                ['AC', 'C', 'Plus', 'Subtract','Divide', 'Multiply', 'Equals'].map(operator => {
                    let displayValue = '';
                    switch (operator){
                        case 'AC':
                            displayValue = 'AC'
                        break;
                        case 'C':
                            displayValue = 'C'
                        break;
                        case 'Plus':
                            displayValue = '+'
                        break;
                        case 'Subtract':
                            displayValue = '-'
                        break;
                        case 'Divide':
                            displayValue = '÷'
                        break;
                        case 'Multiply':
                            displayValue = 'x'
                        break;
                        case 'Equals':
                            displayValue = '='
                        break;
                    }
                    return <button
                    //set the key (works like an ID)
                        key={`button-Operator-${operator}`}
                        type='button'
                        //the classname is unique to each operat with n and then the operator
                        className={`${operator}`} id={`${operator}`}
                        //value is set to the operator in the mapping
                        value={`${operator}`}
                        //calls function from parent class and sets it on click
                        onClick={() =>{
                            clearFunctions(`${operator}`);
                            displayOperator(`${operator}`);
                            mathFunction(`${displayValue}`);
                        }}
                    >
                        {/* displays operator based on map */}
                        {displayValue}
                    </button>
                })
            }
        </div>
    );
}

export default Operators;