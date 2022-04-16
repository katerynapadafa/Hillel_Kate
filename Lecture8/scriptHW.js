const firstNumberEl = document.getElementById('first-number');
const secondNumberEl = document.getElementById('second-number');
const calculateBtnEl = document.querySelector('.calculate-btn');
const resultTextEl = document.querySelector('.result-text')
const errorEl = document.querySelector('.error-text')
const operatorEl = document.querySelector('select')

calculateBtnEl.addEventListener('click', onCalculateBtn);
firstNumberEl.addEventListener('input', getValue1)
secondNumberEl.addEventListener('input', getValue2)

function onCalculateBtn() {
    calculate();
    clearInput();
}

function calculate() {
    const a = getValue1();
    const b = getValue2();
    const op = operatorEl.value;
    let result = 0;
    switch (op) {
        case '+':
            result = Number(a) + Number(b);
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    return resultTextEl.textContent = `Your result = ${result}`
}

function getValue1() {
    const val1 = firstNumberEl.value;
    if (val1 === '' || val1 === null) {
        return errorEl.textContent = 'Please, check your first number!';
    }
    if (isNaN(val1)) {
        return errorEl.textContent = 'Your first element is not a number!';
    }
    errorEl.textContent = '';
    return val1
}

function getValue2() {
    const val2 = secondNumberEl.value;
    if (val2 === '' || val2 === null) {
        return errorEl.textContent = 'Please, check your second number!';
    }
    if (isNaN(val2)) {
        return errorEl.textContent = 'Your second element is not a number!';
    }
    errorEl.textContent = '';
    return val2
}

function clearInput() {
    firstNumberEl.value = '';
    secondNumberEl.value = '';
}