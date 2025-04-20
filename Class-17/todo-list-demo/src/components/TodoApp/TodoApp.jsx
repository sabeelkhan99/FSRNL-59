import React, { useState } from 'react';
import Form from '../Form/Form';
import { v4 as uuid } from 'uuid';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {

    const initialTodos = [
        {
            id: uuid(),
            task: 'Learn Swimming',
            completed: false
        },
        {
            id: uuid(),
            task: 'Go to Shopping',
            completed: false
        },
        {
            id: uuid(),
            task: 'Watch Series',
            completed: true
        }
    ];


    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodo) => {
        setTodos((prevState) => [...prevState, newTodo]);
    }

    const markTodoCompleted = (todoId)=>{
        setTodos((prevState)=> prevState.map((todo)=> todo.id === todoId ? {...todo, completed: !todo.completed}: todo))
    }   

    // Write Delete Todos method

    return (
        <div>
            <h1 className="completed">Todo List</h1>
            <Form addTodo={ addTodo } />
            <TodoList todos={todos} markTodoCompleted={markTodoCompleted} />
        </div>
    )
}

export default TodoApp
