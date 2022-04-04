const mathOperator = getMathOperator();
const operands = getOperands();
const result = calculate(operands, mathOperator);
getResult(operands, mathOperator, result)


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
    return operands.split(',');
};

function calculate(operands, operator) {
    let sum = 0;
    let result = operands[0];

    switch (operator) {
        case '+':
            for (let i = 0; i < operands.length; i++) {
                sum += Number(operands[i]);
            };
            return sum;
        case '-':
            for (let i = 1; i < operands.length; i++) {
                result -= operands[i];
            };
            return result;
        case '*':
            for (let i = 1; i < operands.length; i++) {
                result *= operands[i];
            };
            return result;
        case '/':
            for (let i = 1; i < operands.length; i++) {
                result /= operands[i];
            };
            return result;
    };
};

function getResult(operands, operator, result) {
    let operandsAndOperator;
    for (let i = 0; i < operands.length; i++) {
        operandsAndOperator = operands.join(operator)
    };
    return alert(` Your result: ${operandsAndOperator} = ${result}`)
};