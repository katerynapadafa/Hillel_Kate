import NewTodoForm from '../NewTodoForm/NewTodoForm';
import React from 'react'
import TodoList from '../TodoList/TodoList';

function App() {
    return (
        <div className="container">
            <TodoList/>
            <NewTodoForm />
        </div>
    );
}

export default App