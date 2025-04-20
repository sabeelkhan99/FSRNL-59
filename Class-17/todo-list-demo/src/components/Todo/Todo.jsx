import React from 'react';
import styles from './Todo.module.css';

const Todo = (props) => {
    return (
        <li className={`${props.completed ? styles.completed : ''}`}>
            <span>{props.task}</span>
            <input type="checkbox" defaultChecked={props.completed} onChange={() => props.markTodoCompleted(props.id)} />
        </li>
    )
}

export default Todo
