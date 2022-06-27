const TODOS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/'
export default class TodosCollection {
    constructor() {
        this.list = [];
    }

    fetchList() {
        return fetch(TODOS_URL)
            .then(res => res.json())
            .then(data => (this.list = data))
    }

    toggleTodo(todoId) {
        const todoItem = this.list.find(({ id }) => id == todoId)
        if (!todoItem) {
            return console.error('No task')
        }
        todoItem.isDone = !todoItem.isDone

        return fetch(TODOS_URL + todoId, {
            method: 'PUT',
            body: JSON.stringify(todoItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    removeTodo(todoId) {
        this.list = this.list.filter(({ id }) => id != todoId)

        return fetch(TODOS_URL + todoId, {
            method: 'DELETE',
        })
    }
    createTodo(newTodo) {

        return fetch(TODOS_URL, {
                body: JSON.stringify(newTodo),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',

            }).then(response => response.json())
            .then((data) => this.list.push(data));
    }
}