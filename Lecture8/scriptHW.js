const firstNumberEl = document.getElementById('first-number');
const secondNumberEl = document.getElementById('second-number');
const calculateBtnEl = document.querySelector('.calculate-btn');
const resultTextEl = document.querySelector('.result-text')
const errorEl = document.querySelector('.error-text')
const operatorEl = document.querySelector('#select')

calculateBtnEl.addEventListener('click', onCalculateBtn);
firstNumberEl.addEventListener('input', getValue)
secondNumberEl.addEventListener('input', getValue)

function onCalculateBtn() {
    calculate();
    clearInput();
}

function calculate() {
    const [a, b] = getValue();
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

function getValue() {
    const val1 = firstNumberEl.value;
    const val2 = secondNumberEl.value;

    if (val1 === '' || val2 === '') {
        errorEl.textContent = 'Please, check your numbers!';
        return
    }
    if (isNaN(val1) || isNaN(val2)) {
        errorEl.textContent = 'Your elements are not  numbers!';
        return
    }
    errorEl.textContent = '';
    return [val1, val2];
}

function clearInput() {
    firstNumberEl.value = '';
    secondNumberEl.value = '';
}