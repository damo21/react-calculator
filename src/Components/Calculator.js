import '../App.css';
import Textbox from './CalculatorComponents/Textbox';
import Numbers from './CalculatorComponents/Numbers';
import Operators from './CalculatorComponents/Operators';
import React, { useState } from 'react';

const Calculator = () => {
    const [numberData, setNumberData] = useState('');
    const [operator, setOperator] = useState('');

    //funtion which sets the usestae value to display in textbox
    const displayNumberInTextbox = (value) => {
        setNumberData(numberData + value);
    }

    const displayOperator = (id) => {
        setOperator(operator + id);
    }

    //does math calculations to display
    const getCalculatedValue = () =>{
        let firstNumber = 0.00;
        let secondNumber = 0.00;
        let numberArray = [];

        if(numberData.includes('x')){
            numberArray = numberData.split('x');
            firstNumber = parseFloat(numberArray[0]);
            secondNumber = parseFloat(numberArray[1]);
            setNumberData(firstNumber * secondNumber);

        } else if(numberData.includes('+')){
            numberArray = numberData.split('+');
            firstNumber = parseFloat(numberArray[0]);
            secondNumber = parseFloat(numberArray[1]);
            setNumberData(firstNumber + secondNumber);

        } else if (numberData.includes('-')) {
            numberArray = numberData.split('-');
            firstNumber = parseFloat(numberArray[0]);
            secondNumber = parseFloat(numberArray[1]);
            setNumberData(firstNumber - secondNumber);

        }else if (numberData.includes('÷')) {
            numberArray = numberData.split('÷');
            firstNumber = parseFloat(numberArray[0]);
            secondNumber = parseFloat(numberArray[1]);
            setNumberData(firstNumber / secondNumber);

        }
    }

    const clearFunctions = (operator) => {
        // this remove the last character or all charactes from the numberData string
        switch (operator){
            case 'AC':
                setNumberData('');
            break;
            case 'C':
                setNumberData(numberData.slice(0, -1));
        }
    }

    //determines which math function is being used
    const mathFunction = (displayValue) => {
        if(numberData !=''){
            switch (displayValue){
                case '+':
                    setNumberData(numberData + displayValue);
                break;
                case '-':
                    setNumberData(numberData + displayValue);
                break;
                case 'x':
                    setNumberData(numberData + displayValue);
                break;
                case '÷':
                    setNumberData(numberData + displayValue);
                break;
                case '=':
                    getCalculatedValue();
            }
        }    
    }

    return (
        <div className='calculatorBody'>
            <div>
                {/* pass down data which was set in function to child */}
                <Textbox
                    numberData={numberData}
                />
                {/* created function which is passed down to child */}
                <Numbers 
                    displayNumberInTextbox={displayNumberInTextbox}
                />
                <Operators 
                    displayOperator={displayOperator} 
                    clearFunctions={clearFunctions}
                    mathFunction={mathFunction} 
                />
            </div>
        </div>
    );
}

export default Calculator;