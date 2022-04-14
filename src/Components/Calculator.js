import '../App.css';
import Textbox from './CalculatorComponents/Textbox';
import Numbers from './CalculatorComponents/Numbers';

const Calculator = () => {
    return(
        <div className='calculatorBody'>
            <div>
                <Textbox/>
                <Numbers/>
            </div>
        </div>
    );
}

export default Calculator;