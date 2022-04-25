const inputEl = document.getElementById('input');
const listEl = document.getElementById('list');
const addButtonEl = document.getElementById('addButton');
const errorEl = document.getElementById('error');

addButtonEl.addEventListener('click', onClickBtn);
inputEl.addEventListener('input', getToDo);

function onClickBtn() {
    const task = createToDo();
    listEl.prepend(task);
    clearInput();
}

function createToDo() {
    const toDo = document.createElement('div');
    toDo.textContent = getToDo();
    toDo.classList.add('to-do');

    return toDo;
}

function getToDo() {
    const userInput = inputEl.value;

    if (userInput === '' || userInput.length < 3) {
        errorEl.textContent = 'Your task must have more than 3 characters';
        addButtonEl.disabled = true;
        inputEl.classList.add('invalid');
        return;
    }
    inputEl.classList.remove('invalid');
    errorEl.textContent = '';
    addButtonEl.disabled = false;
    return userInput;
}


function clearInput() {
    inputEl.value = '';
}