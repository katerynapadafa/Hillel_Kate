const STICKERS_API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers'

const EDIT_STICKER_CLASS = 'sticker-body'
const DELETE_STICKER_CLASS = 'deleteBtn'

const containerEL = document.querySelector('.container')
const createBtnEl = document.querySelector('#createBtn')
const stickerTemplate = document.querySelector('#sticker-template').innerHTML;

let stickerzList = []

createBtnEl.addEventListener('click', onAddStickerBtnClick)
containerEL.addEventListener('click', onContainerElementClick);
containerEL.addEventListener('input', debounce(onContainerElementInput));
init();

function onAddStickerBtnClick() {
    createSticker();
}

function onContainerElementClick(e) {
    switch (true) {
        case e.target.classList.contains(DELETE_STICKER_CLASS):
            deleteSticker(e.target.parentElement.dataset.stickerIndex);
            break;
    }
}

function onContainerElementInput(e) {
    const element = e.target;

    switch (true) {
        case e.target.classList.contains(EDIT_STICKER_CLASS):
            updateSticker(
                element.parentElement.dataset.stickerIndex,
                element.name,
                element.value,
            );
            break;
    }
}

function init() {
    getList();
}

function getList() {
    fetch(STICKERS_API_URL)
        .then((res) => res.json())
        .then(data => stickerzList = data)
        .then(renderList);
}

function createSticker() {
    const sticker = {
        description: '',
    };

    fetch(STICKERS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sticker),
        })
        .then((res) => res.json())
        .then((sticker) => {
            stickerzList.push(sticker);
            renderSticker(sticker);
        });
}

function updateSticker(id, name, value) {
    const sticker = stickerzList.find((el) => el.id == id);

    sticker[name] = value;

    fetch(`${STICKERS_API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sticker),
    });
}

function deleteSticker(id) {
    stickerzList = stickerzList.filter((el) => el.id != id);

    deleteStickerElement(id);

    fetch(`${STICKERS_API_URL}/${id}`, {
        method: 'DELETE',
    });
}

function deleteStickerElement(id) {
    const element = getStickerElement(id);
    element && element.remove();
}

function getStickerElement(id) {
    return containerEL.querySelector(`[data-sticker-index="${id}"]`)
}

function renderSticker(sticker) {
    containerEL.insertAdjacentHTML('afterbegin', getStickerHtml(sticker));
}

function renderList(stickerzList) {
    stickerzList.forEach(renderSticker);
}


function getStickerHtml(sticker) {
    return stickerTemplate
        .replace('{{id}}', sticker.id)
        .replace('{{description}}', sticker.description);
}