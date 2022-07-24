import {
    createTodo as apiCreateTodo,
    removeTodo as apiRemoveTodo,
    updateTodo as apiUpdateTodo,
    getTodoList,
} from '../../api';
import { useEffect, useState } from "react";

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import React from 'react';
import TodoList from '../TodoList/TodoList'

export default function App() {

    const [list, setList] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetchList()

    }, [])

    function fetchList() {
        return getTodoList()
            .then((data) => setList(data))
            .catch(() => {
                setError('Something went wrong')
            });
    }


    function updateTodo(updatedTodo) {
        const prevTodo = list.find(
            (item) => item.id === updatedTodo.id,
        );

        setList(list.map((item) =>
            item.id === updatedTodo.id ? updatedTodo : item))

        return apiUpdateTodo(updatedTodo).catch(() => {
            setError('Something went wrong')
            setList(list.map((item) =>
                item.id === prevTodo.id ? prevTodo : item))

        });
    }

    function toggleTodo(id) {
        const todo = list.find((item) => item.id === id);

        updateTodo({...todo, isDone: !todo.isDone });
    };

    function removeTodo(id) {
        const newList = list.filter((item) => item.id !== id);

        setList(newList)


        return apiRemoveTodo(id);
    };

    function createTodo(newTodo) {
        newTodo = {
            ...newTodo,
            isDone: false,
        };

        apiCreateTodo(newTodo).then((data) => {
            setList([...this.state.list, data])
        });
    };

    return ( <div className = "container" > { error ? error : null } 
    <TodoList list = { list }
        onToggle = { toggleTodo }
        onRemove = { removeTodo }/> 
        < NewTodoForm onSave = { createTodo }
        /> 
        </div >
    );
}