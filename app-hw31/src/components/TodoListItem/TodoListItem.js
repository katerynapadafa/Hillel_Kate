import './TodoListItem.css';

import React from 'react'

export default function TodoListItem(props) {

  function  onItemClick ()  {
        props.onToggle(props.item.id);
    };

    function   onDeleteItemClick  (e) {
        e.stopPropagation();

        props.onRemove(props.item.id);
    };


    return (
                    <div
                        className={
                            'task-item' +
                            (props.item.isDone ? ' done' : '')
                        }
                        onClick={onItemClick}
                    >
                        {props.item.title}
                        <span className="delete-btn" onClick={onDeleteItemClick}>
                            ✘
                        </span>
                    </div>
                );
}

