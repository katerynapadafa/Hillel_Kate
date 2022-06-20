class TodosFormView {
    static FORM_TEMPLATE = `      <form id="form">
<input type="text" id="input" name="toDoText" placeholder="Today I need to...">
<button type="submit" id="addButton">Add</button>

<div id="error"></div>
</form>
`
    static TASK_NAME_SELECTOR = '#input'

    constructor(config) {
        this.config = config
        this.$el = $(TodosFormView.FORM_TEMPLATE).
        on('submit', (e) => this.onFormSubmit(e))
    }

    onFormSubmit(e) {
        e.preventDefault()

        const taskName = this.$el.find(TodosFormView.TASK_NAME_SELECTOR).val();

        this.config.onSave && this.config.onSave({ title: taskName })

        this.$el[0].reset()
    }
}