import './NewTodoForm.css'

import React from 'react'
import { useState } from 'react'

export default function NewTodoForm( props) {
    const [title, setTitle] = useState('')


 function   onTitleChange(e) {
      setTitle(e.target.value)
    
    };

    function  onFormSubmit  (e) {
        e.preventDefault();

        props.onSave({
            title: title,
        });

        setTitle('')
    };

    return (
                    <form onSubmit={onFormSubmit}>
                        <div className="row">
                            <div >
                                <input
                                    type="text"
                                    className="todo-input"
                                    value={title}
                                    onChange={onTitleChange}
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

