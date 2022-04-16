const firstNumberEl = document.getElementById('first-number');
const secondNumberEl = document.getElementById('second-number');
const calculateBtnEl = document.querySelector('.calculate-btn');
const resultTextEl = document.querySelector('.result-text')
const operatorEl = document.querySelector('select')

calculateBtnEl.addEventListener('click', onCalculateBtn);
firstNumberEl.addEventListener('click', onInput)

function onCalculateBtn() {
    calculate();
    clearInput();
}

function calculate() {
    const a = getValue(firstNumberEl);
    const b = getValue(secondNumberEl);
    const op = getValue(operatorEl);
    if (a === '' || b === '' || a === null || b === null) {
        return resultTextEl.textContent = 'Please, check your numbers!';
    };
    if (isNaN(a) || isNaN(b)) {
        return resultTextEl.textContent = 'Please, use numbers only!';
    };
    let result;
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
    return resultTextEl.textContent = `Your result = ${result} `
}

function getValue(element) {
    return element.value;
}

function clearInput() {
    firstNumberEl.value = '';
    secondNumberEl.value = '';
}