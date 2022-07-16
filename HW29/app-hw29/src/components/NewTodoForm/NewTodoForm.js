import './NewTodoForm.css'

import React, { Component } from 'react';

export default class NewTodoForm extends Component {
    state = {
        title: '',
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div >
                        <input
                            type="text"
                            className="todo-input"
                            value={this.state.title}
                            onChange={this.onTitleChange}
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

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
            title: this.state.title,
        });

        this.setState({
            title: '',
        });
    };
}