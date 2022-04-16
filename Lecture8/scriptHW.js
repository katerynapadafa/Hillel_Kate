const firstNumberEl = document.getElementById('first-number');
const secondNumberEl = document.getElementById('second-number');
const calculateBtnEl = document.querySelector('.calculate-btn');
const resultTextEl = document.querySelector('.result-text')
const operatorEl = document.querySelector('select')

calculateBtnEl.addEventListener('click', onCalculateBtn);

function onCalculateBtn() {
    calculate();
    clearInput();
}

function calculate() {
    const a = getInput(firstNumberEl);
    const b = getInput(secondNumberEl);
    const op = operatorEl.value;
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

function getInput(input) {
    return input.value;
}

function clearInput() {
    firstNumberEl.value = '';
    secondNumberEl.value = '';
}