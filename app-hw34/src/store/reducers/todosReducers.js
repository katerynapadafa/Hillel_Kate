import {TODOS_CREATE_TODO, TODOS_REMOVE_TODO, TODOS_TOGGLE_TODO} from '../actions/todosActions'

const initialValue ={
    list:[{"title":"New","isDone":true,"id":"15"},{"title":"strategy actuating generate","isDone":false,"id":"21"},{"title":"Human invoice Fish","isDone":true,"id":"42"},{"title":"not new Todo","isDone":true,"id":"45"}]
}

function toggleTodo(state, id){
    return {...state, 
        list : state.list.map(item=> 
            item.id !==id? item: {...item, isDone:!item.isDone})}
}

function removeTodo(state, id){
    return {...state, 
        list : state.list.filter(item=> 
            item.id !==id)}
}

function createTodo(state, newTodo){
   return {
    ...state, list:[...state.list, {...newTodo, isDone:false, id:Date.now()}]
   }
}

export default function todosReducer(state=initialValue, {type, payload}){
    switch(type){
        case TODOS_TOGGLE_TODO: 
        return toggleTodo(state, payload)
        case TODOS_REMOVE_TODO: 
        return removeTodo(state, payload)
        case TODOS_CREATE_TODO: 
        return createTodo(state, payload)
        default: return state;
    }
}