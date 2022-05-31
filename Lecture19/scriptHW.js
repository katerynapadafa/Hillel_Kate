$(() => {
    const STICKERS_API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers'

    const EDIT_STICKER_SELECTOR = '.sticker-body'
    const DELETE_STICKER_SELECTOR = '.deleteBtn'
    const STICKER_SELECTOR = '.sticker'

    const $container = $('.container').on('click', DELETE_STICKER_SELECTOR, onContainerElementClick).on('input', EDIT_STICKER_SELECTOR, debounce(onContainerElementInput));
    const $createBtn = $('#createBtn').on('click', onAddStickerBtnClick)
    const stickerTemplate = $('#sticker-template').html();

    let stickerzList = []

    init();

    function onAddStickerBtnClick() {
        createSticker();
    }

    function onContainerElementClick(e) {
        const $el = $(e.target);

        deleteSticker($el.parent().data('stickerIndex'));
    }

    function onContainerElementInput(e) {
        const $el = $(e.target) //this will lose context
        updateSticker(
            $el.parent().data('stickerIndex'), { description: $el.val() }
        );
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
        const id = Date.now();

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

                getStickerElement(id).replaceWith(sticker)
            });

        renderSticker({...sticker, id })
    }

    function updateSticker(id, changes) {
        let sticker = stickerzList.find((el) => el.id == id);

        stickerzList.map(el => (el.id == id ? sticker : el))

        sticker = {
            ...sticker,
            ...changes,
        }

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
        const $el = getStickerElement(id);
        $el.remove();
    }

    function getStickerElement(id) {
        return $container.find(`[data-sticker-index="${id}"]`)
    }

    function renderSticker(sticker) {
        $container.append(getStickerHtml(sticker));
    }

    function renderList(stickerzList) {
        const stickerHtmls = stickerzList.map(getStickerHtml);

        $container.html(stickerHtmls.join(""))
    }

    function getStickerHtml(sticker) {
        return stickerTemplate
            .replace('{{id}}', sticker.id)
            .replace('{{description}}', sticker.description);
    }
})