export default class TodosListView {
    static LIST_TEMPLATE = `<div id="list" class="list"></div>`
    static LIST_ITEM_TEMPLATE =
        ` <div class="to-do {{doneClass}}" data-id="{{id}}">
{{title}}
<button type="button" class="delete-button">Delete</button>
</div>`
    static TASK_DONE_CLASS = 'done'
    static TASK_SELECTOR = '.to-do'
    static TASK_DELETE_SELECTOR = '.delete-button'
    static createItemElement(todo) {

        return $(TodosListView.LIST_ITEM_TEMPLATE.replace('{{id}}', todo.id)
            .replace('{{title}}', todo.title)
            .replace('{{doneClass}}', todo.isDone ? TodosListView.TASK_DONE_CLASS : '')
        )
    }

    constructor(config = {}) {
        this.$el = $(TodosListView.LIST_TEMPLATE).on(
            'click',
            TodosListView.TASK_SELECTOR,
            (e) => { config.onToggle && config.onToggle($(e.target).data('id')) }
        ).on('click', TodosListView.TASK_DELETE_SELECTOR,
            (e) => {
                (
                    e.stopPropagation(),
                    config.onDelete &&
                    config.onDelete($(e.target)
                        .closest(TodosListView.TASK_SELECTOR)
                        .data('id'))
                )
            })
    }

    renderList(list) {
        this.$el.empty();
        this.$el.append(list.map(TodosListView.createItemElement))
    }
}