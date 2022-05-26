const DELETE_BTN_CLASS = 'delete-button';
const EDIT_BTN_CLASS = 'edit-btn';
const CONTACT_ROW_SELECTOR = '.contact-row';
const ERROR_TEXT = 'Some of your fields are not valid';
const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users'

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

    const newContact = getFormData();

    if (isContactValid(newContact)) {
        saveContact(newContact);
        resetForm();
    } else {
        alert(ERROR_TEXT);
    }
}

function onContactsListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const id = getContactRowId(e.target);
        removeContact(id);
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        const id = getContactRowId(e.target);
        editContact(id);
    }
}

function init() {
    fetchList();

}

function fetchList() {
    fetch(API_URL)
        .then(r => r.json())
        .then(data => {
            contactsListArray = data
            renderList();
        })
}

function getFormData() {
    const contact = {};

    formInputs.forEach(input => {
        contact[input.name] = input.value;
    });

    return contact;

}

function setFormData(contact) {
    formInputs.forEach((inp) => {
        inp.value = contact[inp.name];
    });
}

function isContactValid(contact) {
    return (
        isTextValid(contact.name) &&
        isTextValid(contact.email) &&
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

function saveContact(contact) {
    if (contact.id) {
        updateContact(contact);
    } else {
        addContact(contact);
    }
}

function updateContact(contact) {
    fetch(API_URL + '/' + contact.id, {
        method: "PUT",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => {
        fetchList();
    });
}

function addContact(contact) {
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((data) => {
        fetchList();
    })
}

function resetForm() {
    formInputs.forEach((inp) => {
        inp.value = '';
    });
}

function removeContact(id) {
    fetch(API_URL + '/' + id, {
            method: 'DELETE',
        })
        .then((data) => {
            fetchList();
        })
}

function getContactRowId(el) {
    return el.closest(CONTACT_ROW_SELECTOR).dataset.id;
}

function renderList() {
    contactsList.innerHTML = contactsListArray.map(generateContactHtml).join('\n');
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

function editContact(id) {
    const contact = contactsListArray.find((contact) => contact.id === id);
    currentId = id;
    setFormData(contact);
}