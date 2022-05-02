DELETE_BUTTON_CLASS = 'delete-button';
INVALID_INPUT_CLASS = 'invalid'

const inputEl = document.getElementById('input');
const listEl = document.getElementById('list');
const addButtonEl = document.getElementById('addButton');
const errorEl = document.getElementById('error');
const toDoTemplate = document.querySelector('#template').innerHTML;

addButtonEl.addEventListener('click', onAddClickBtn);
inputEl.addEventListener('input', getToDo);

function onAddClickBtn(event) {
    event.preventDefault();

    const newToDo = getToDo();
    console.log(newToDo)
    clearInput();

    if (inValidToDo(newToDo)) {
        addToDo(newToDo);
        showError();
    } else {
        hideError();
    }
}

function getToDo() {

    const toDoListObj = {
        kate: 324,
    };

    toDoListObj[inputEl.name] = inputEl.value;

    return toDoListObj;
}

function inValidToDo() {
    return inputEl.value === '' || inputEl.value.length < 3;
}

function addToDo(toDoEl) {
    const newToDoHTML = generateToDoHTML(toDoEl);

    listEl.insertAdjacentHTML('beforeend', newToDoHTML);
}

function generateToDoHTML(toDo) {
    interpolate(toDoTemplate, toDo);
}


function showError() {
    inputEl.classList.add(INVALID_INPUT_CLASS)
    errorEl.textContent = 'Your task must have more than 3 characters';
    addButtonEl.disabled = true;
}


function hideError() {
    inputEl.classList.remove(INVALID_INPUT_CLASS)
    errorEl.textContent = '';
    addButtonEl.disabled = false;
}

function clearInput() {
    inputEl.value = '';
}

function interpolate(template, object) {
    for (key in object) {
        template = template.replaceAll(`{{${key}}}`, object[key]);
    }
    return template;
}