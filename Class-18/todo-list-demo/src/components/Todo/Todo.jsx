import React, { useEffect } from 'react';
import styles from './Todo.module.css';

const Todo = (props) => {

    const deleteTodoHandler = () => {
        props.deleteTodo(props.id);
    }

    useEffect(() => {
        return () => {
            console.log('performing clean up')
        }
    },[]);

    return (
        <li className={`${props.completed ? styles.completed : ''}`}>
            <span>{props.task}</span>
            <span onClick={deleteTodoHandler}>&nbsp; &nbsp;X</span>
            <input type="checkbox" defaultChecked={props.completed} onChange={() => props.markTodoCompleted(props.id)} />
        </li>
    )
}

export default Todo
