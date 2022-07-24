import './TodoList.css';

import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export default function TodoList(props) {
    return (
                    <div className="task-list u-full-width">
                        {props.list.map((item) => (
                            <TodoListItem
                                key={item.id}
                                item={item}
                                onToggle={props.onToggle}
                                onRemove={props.onRemove}
                            />
                        ))}
                    </div>
                );
}

