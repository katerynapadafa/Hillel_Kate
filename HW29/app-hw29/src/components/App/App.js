import React, { Component } from 'react';
import { createTodo, getTodoList, removeTodo, updateTodo } from '../../api';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';

export default class App extends Component {
    state = {
        list: [],
    };

    componentDidMount() {
        this.fetchList();
    }

    render() {
        return (
            <div className="container">
                {this.state.error ? this.state.error : null}
                <TodoList
                    list={this.state.list}
                    onToggle={this.toggleTodo}
                    onRemove={this.removeTodo}
                />
                <NewTodoForm onSave={this.createTodo} />
            </div>
        );
    }

    fetchList() {
        return getTodoList()
            .then((data) => this.setState({ list: data }))
            .catch(() => {
                this.setState({
                    error: 'Something went wrong',
                });
            });
    }

    updateTodo(updatedTodo) {
        const prevTodo = this.state.list.find(
            (item) => item.id === updatedTodo.id,
        );

        this.setState({
            list: this.state.list.map((item) =>
                item.id === updatedTodo.id ? updatedTodo : item,
            ),
        });

        return updateTodo(updatedTodo).catch(() => {
            this.setState({
                error: 'Something went wrong',
                list: this.state.list.map((item) =>
                    item.id === prevTodo.id ? prevTodo : item,
                ),
            });
        });
    }

    toggleTodo = (id) => {
        const todo = this.state.list.find((item) => item.id === id);

        this.updateTodo({ ...todo, isDone: !todo.isDone });
    };

    removeTodo = (id) => {
        const newList = this.state.list.filter((item) => item.id !== id);

        this.setState({
            list: newList,
        });

        return removeTodo(id);
    };

    createTodo = (newTodo) => {
        newTodo = {
            ...newTodo,
            isDone: false,
        };

        createTodo(newTodo).then((data) => {
            this.setState({
                list: [...this.state.list, data],
            });
        });
    };
}