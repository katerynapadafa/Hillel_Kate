function calculator() {

    const mathOperation = prompt('Which math operation would you like to do? (Type +, -, * or /)');
    const firstNumber = +prompt('Enter first number');
    const secondNumber = +prompt('Enter second number');
    const result = `${firstNumber} ${mathOperation} ${secondNumber} =`;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return alert('Use numbers only!');
    };

    switch (mathOperation) {
        case '+':
            alert(`${result} ${firstNumber + secondNumber}`);
            break;
        case '-':
            alert(`${result} ${firstNumber - secondNumber}`);
            break;
        case '*':
            alert(`${result} ${firstNumber * secondNumber}`);
            break;
        case '/':
            alert(`${result} ${firstNumber / secondNumber}`);
            break;
        default:
            alert('Invalid math operation');
            break;
    };
};
calculator();