const mathOperator = getMathOperator();
const operands = getOperands();
const arrayOfOperands = getArrayOfOperands(operands);
const result = calculate(arrayOfOperands, mathOperator);
getResult(arrayOfOperands, mathOperator, result)


function getMathOperator() {
    const operator = prompt('Which math operation would you like to do? (Type +, -, * or /)');
    return isOperatorValid(operator);
};

function isOperatorValid(operator) {
    if (operator !== '+' &&
        operator !== '-' &&
        operator !== '*' &&
        operator !== '/') {
        alert('Invalid math operator! Type +, -, * or /.');
        return getMathOperator();
    };
    return operator;
};

function getOperands() {
    const operands = prompt('Enter operands. (You need to separate them with comma)')
    if (operands === null || operands === '') {
        alert('Enter operands!')
        return getOperands();
    };
    return operands;
};

function getArrayOfOperands(string) {
    const arrayOfOperands = string.split(',');
    return arrayOfOperands;
};

function calculate(operands, operator) {
    const arrayOfOperands = operands;
    let sum = 0;
    let sub = arrayOfOperands[0];
    let mult = arrayOfOperands[0];
    let div = arrayOfOperands[0];

    switch (operator) {
        case '+':
            for (let i = 0; i < arrayOfOperands.length; i++) {
                sum += Number(arrayOfOperands[i]);
            };
            return sum;
        case '-':
            for (let i = 1; i < arrayOfOperands.length; i++) {
                sub -= arrayOfOperands[i];
            };
            return sub;
        case '*':
            for (let i = 1; i < arrayOfOperands.length; i++) {
                mult *= arrayOfOperands[i];
            };
            return mult;
        case '/':
            for (let i = 1; i < arrayOfOperands.length; i++) {
                div /= arrayOfOperands[i];
            };
            return div;
    };
};

function getResult(operands, operator, result) {
    let operandsAndOperator = operands[0];
    for (let i = 1; i < operands.length; i++) {
        operandsAndOperator
            += ` ${operator}${operands[i]}`
    }
    alert(` Your result: ${operandsAndOperator} = ${result}`)
};