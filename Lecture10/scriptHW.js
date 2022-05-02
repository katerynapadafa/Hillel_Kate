const DELETE_BTN_CLASS = 'delete-button';
const CONTACT_ROW_SELECTOR = '.contact-row';

const contactForm = document.querySelector('#form');
const contactsList = document.querySelector('#phone-book-list');
const contactTemplate = document.querySelector('#phone-book-list-item').innerHTML;
const formInputs = document.querySelectorAll('.input');

contactForm.addEventListener('submit', onContactFormSubmit);
contactsList.addEventListener('click', onContactsListClick);


function onContactFormSubmit(event) {
    event.preventDefault();

    const newContact = getContact();

    if (isContactValid(newContact)) {
        addContact(newContact);
        resetForm();
    } else {
        alert('Some of your fields are not valid');
    }
}

function onContactsListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const tr = getContactRow(e.target);
        removeContact(tr);
    }
}

function getContact() {
    const contact = {};

    formInputs.forEach((input) => {
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

function generateContactHtml(contact) {
    return interpolate(contactTemplate, contact);
}

function addContact(contact) {
    const newContactHtml = generateContactHtml(contact);

    contactsList.insertAdjacentHTML('beforeend', newContactHtml);
}

function resetForm() {
    contactForm.reset();
}

function getContactRow(el) {
    return el.closest(CONTACT_ROW_SELECTOR);
}

function removeContact(el) {
    el.remove();
}

function interpolate(template, object) {
    for (key in object) {
        template = template.replace(`{{${key}}}`, object[key]);
    }
    return template;
}