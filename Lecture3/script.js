const mathOperator = getMathOperator();
const firstNumber = getNumber('Enter first number');
const secondNumber = getNumber('Enter second number');
const result = calculate(firstNumber, secondNumber, mathOperator);
showFinalResult(firstNumber, secondNumber, mathOperator, result);

function getMathOperator() {
    const operator = prompt('Which math operation would you like to do? (Type +, -, * or /)');
    return isOperatorValid(operator);
};

function isOperatorValid(operator) {
    if (operator !== '+' &&
        operator != '-' &&
        operator != '*' &&
        operator != '/') {
        alert('Invalid math operator! Type +, -, * or /.');
        return getMathOperator();
    };
    return operator;
};

function getNumber(message) {
    const userNumber = +prompt(message);
    if (isNaN(userNumber)) {
        alert('Use numbers only!');
        return getNumber(message);
    };
    return userNumber;
};

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            alert('Invalid math operation');
    };
};

function showFinalResult(firstNumber, secondNumber, mathOperator, result) {
    alert(`Your result: ${firstNumber} ${mathOperator} ${secondNumber} = ${result}`);
};