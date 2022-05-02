const DELETE_BUTTON_CLASS = 'delete-button';
const INVALID_INPUT_CLASS = 'invalid'
const LIST_SELECTOR = '.list'
const TO_DO_SELECTOR = '.to-do'

const inputEl = document.getElementById('input');
const listEl = document.getElementById('list');
const addButtonEl = document.getElementById('addButton');
const errorEl = document.getElementById('error');
const toDoTemplate = document.querySelector('#template').innerHTML;

addButtonEl.addEventListener('click', onAddClickBtn);
inputEl.addEventListener('keyup', validateToDo);
listEl.addEventListener('click', onDeleteButtonClick)


function onAddClickBtn() {
    const newToDo = getToDo();
    validateToDo(newToDo)
    addToDo(newToDo);
    clearInput()
}

function onDeleteButtonClick(e) {
    if (e.target.classList.contains(DELETE_BUTTON_CLASS)) {
        const el = getToDoEl(e.target);
        removeToDo(el)
    }
}

function validateToDo(toDo) {
    if (!inValidToDo(toDo)) {
        hideError();
    } else {
        showError();
    }
}

function getToDo() {

    const toDoListObj = {};

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
    return interpolate(toDoTemplate, toDo);
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


function getToDoEl(el) {
    return el.closest(TO_DO_SELECTOR);
}

function removeToDo(el) {
    el.remove();
}

function clearInput() {
    inputEl.value = '';
}

function interpolate(template, object) {
    let el
    for (key in object) {
        el = template.replace(`{{${key}}}`, object[key]);
    }
    return el;

}