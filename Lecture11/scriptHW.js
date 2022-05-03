const DELETE_BUTTON_CLASS = "delete-button";
const INVALID_INPUT_CLASS = 'invalid'
const LIST_SELECTOR = '.list'
const TO_DO_SELECTOR = '.to-do'

const inputEl = document.getElementById('input');
const listEl = document.getElementById('list');
const addButtonEl = document.getElementById('addButton');
const errorEl = document.getElementById('error');
const toDoTemplate = document.querySelector('#template').innerHTML;
const formEl = document.getElementById('form')

addButtonEl.addEventListener('click', onAddClickBtn);
inputEl.addEventListener('keyup', validateToDo);
listEl.addEventListener('click', onDeleteButtonClick)

let toDoListObj = [{
    id: 13,
    toDoText: "template to do"
}];

init();

function onAddClickBtn(e) {
    e.preventDefault();

    const newToDo = getToDo();
    validateToDo(newToDo)
    addToDo(newToDo);
    clearInput();
}

function onDeleteButtonClick(e) {
    if (e.target.classList.contains(DELETE_BUTTON_CLASS)) {
        const id = getToDoId(e.target);
        removeToDo(id);
    }
}

function init() {
    renderList();
}

function validateToDo(toDo) {
    if (!inValidToDo(toDo)) {
        hideError();
    } else {
        showError();
    }
}

function getToDo() {
    const toDoObj = {}
    toDoObj[inputEl.name] = inputEl.value;

    return toDoObj;
}


function inValidToDo() {
    return inputEl.value === '' || inputEl.value.length < 3;
}

function addToDo(toDoEl) {
    toDoEl.id = Date.now();
    toDoListObj.push(toDoEl)

    renderList();
}

function renderList() {
    listEl.innerHTML = toDoListObj.map(generateToDoHTML).join('\n');
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

function removeToDo(id) {
    toDoListObj = toDoListObj.filter((obj) => obj.id !== id);
    renderList();

}

function getToDoId(el) {
    const toDoEl = el.closest(TO_DO_SELECTOR);
    return +toDoEl.dataset.id;
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