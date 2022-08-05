import React from 'react'
import { createTodo } from '../../store/actions/todosActions'
import { useDispatch } from 'react-redux'

function NewTodoForm() {
  const dispatch = useDispatch()
    function onFormSubmit(e){
e.preventDefault()

const newTodo ={
    title: e.target.elements.newTodoTitle.value
}
dispatch(createTodo(newTodo))
    }
    return (
        <form  onSubmit={onFormSubmit}>
            <div className="row">
                <div >
                    <input
                    name='newTodoTitle'
                        type="text"
                        className="todo-input"
                    
                    />
                    <span
                        id="errorContainer"
                        className="error hidden"
                    ></span>
                </div>
                <div>
                    <button
                        type="submit"
                        id="addBtn"
                        className=""
                    >
                        Add Todo
                    </button>
                </div>
            </div>
        </form>
    );
}

export default NewTodoForm