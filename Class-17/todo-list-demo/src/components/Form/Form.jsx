import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';

const Form = (props) => {

    const todoInpRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const task = todoInpRef.current.value;
        if (task.trim().length === 0) {
            return;
        }
        props.addTodo(
            {
                id: uuid(),
                task: task,
                completed: false
            }
        )
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <input type="text" placeholder="Add Todos" ref={todoInpRef } />
            <button>Add</button>
        </form>
    )
}

export default Form;
