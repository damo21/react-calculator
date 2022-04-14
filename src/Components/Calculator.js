import '../App.css';
import Textbox from './CalculatorComponents/Textbox';
import Numbers from './CalculatorComponents/Numbers';
import Operators from './CalculatorComponents/Operators';

const Calculator = () => {
    return(
        <div className='calculatorBody'>
            <div>
                <Textbox/>
                <Numbers/>
                <Operators/>
            </div>
        </div>
    );
}

export default Calculator;