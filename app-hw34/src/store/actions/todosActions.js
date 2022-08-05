export const TODOS_TOGGLE_TODO =' TODOS_TOGGLE_TODO'

export function toggleTodo(id){
    return {type: TODOS_TOGGLE_TODO, payload: id}
}

export const TODOS_REMOVE_TODO =' TODOS_REMOVE_TODO'

export function removeTodo(id){
    return {type: TODOS_REMOVE_TODO, payload: id}
}
export const TODOS_CREATE_TODO =' TODOS_CREATE_TODO'

export function createTodo(newTodo){
    return {type: TODOS_CREATE_TODO, payload: newTodo}
}