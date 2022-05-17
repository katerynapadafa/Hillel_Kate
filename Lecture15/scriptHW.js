const DELETE_BTN_CLASS = 'delete-button';
const CONTACT_ROW_SELECTOR = '.contact-row';
const ERROR_TEXT = 'Some of your fields are not valid';
const STORAGE_KEY = 'contactsList'

const contactForm = document.querySelector('#form');
const contactsList = document.querySelector('#phone-book-list');
const contactTemplate = document.querySelector('#phone-book-list-item').innerHTML;
const formInputs = document.querySelectorAll('.input');

contactForm.addEventListener('submit', onContactFormSubmit);
contactsList.addEventListener('click', onContactsListClick);

let contactsListArray = [];


init();

function onContactFormSubmit(event) {
    event.preventDefault();

    const newContact = getContact();

    if (isContactValid(newContact)) {
        addContact(newContact);
        resetForm();
    } else {
        alert(ERROR_TEXT);
    }
}

function onContactsListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const id = getContactId(e.target);
        removeContact(id);
    }
}

function init() {

    // contactsListArray = restoreData()
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(data => {
            contactsListArray = data
            renderList();
        })
}

function getContact() {
    const contact = {};

    formInputs.forEach(input => {
        contact[input.name] = input.value;
    });

    return contact;

}

function isContactValid(contact) {
    return (
        isTextValid(contact.name) &&
        isTextValid(contact.surname) &&
        isPhoneValid(contact.phone)
    );
}

function isTextValid(value) {
    return value !== '';
}

function isPhoneValid(value) {
    return isTextValid(value) && !isNaN(value);
}

function addContact(contact) {
    contact.id = Date.now();
    contactsListArray.push(contact)

    saveData();
    renderList();
}

function renderList() {
    contactsList.innerHTML = contactsListArray.map(generateContactHtml).join('\n');
}

function generateContactHtml(contact) {
    return interpolate(contactTemplate, contact);
}

function resetForm() {
    contactForm.reset();
}

function removeContact(id) {
    contactsListArray = contactsListArray.filter((obj) => obj.id !== id);

    saveData();
    renderList();
}

function getContactId(el) {
    const contact = el.closest(CONTACT_ROW_SELECTOR);
    return +contact.dataset.id;
}

function interpolate(template, object) {
    for (key in object) {
        const val = object[key]
        template = template.replaceAll(`{{${key}}}`, val)

        if (typeof val === 'object') {
            template = interpolate(template, val)
        }
    }

    return template;
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contactsListArray))
}

function restoreData() {
    const data = localStorage.getItem(STORAGE_KEY)

    return data ? JSON.parse(data) : [];
}