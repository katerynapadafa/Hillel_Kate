export const TODOS_TOGGLE_TODO =' TODOS_TOGGLE_TODO'
export const toggleTodo= createAction(TODOS_TOGGLE_TODO)
  
export const TODOS_REMOVE_TODO =' TODOS_REMOVE_TODO'
export const removeTodo= createAction(TODOS_REMOVE_TODO)

export const TODOS_CREATE_TODO =' TODOS_CREATE_TODO'
export const createTodo= createAction(TODOS_CREATE_TODO)

function createAction(type){
   return(payload) =>{
    return {type, payload}
   }
}