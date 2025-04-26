import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { v4 as uuid } from 'uuid';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {


    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos') || '[]'));
    const [count, setCount] = useState(0);

    const addTodo = (newTodo) => {
        setTodos((prevState) => [...prevState, newTodo]);
    }

    const markTodoCompleted = (todoId)=>{
        setTodos((prevState)=> prevState.map((todo)=> todo.id === todoId ? {...todo, completed: !todo.completed}: todo))
    }   

    const deleteTodo = (todoId) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));
    }

    console.log("----------------------");

    // This will be executed after each component render
    useEffect(() => {
        console.log('Inside first useEffect: without dependecy array');
    });

    // This will be executed just after the first component render
    useEffect(() => {
        console.log('Inside second useEffect: empty dependecy array');
    }, []);
    
    // This will  be executed after `todos` is updated
    useEffect(() => {
        console.log('Inside third useEffect: todos as the dependecy');
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        console.log('Inside fourth useEffect: count as the dependecy');
    }, [count]);

    useEffect(() => {
        console.log('Inside fifth useEffect: todos,count as the dependecy');
    }, [todos,count]);
    

    return (
        <div>
            <h1 className="completed">Todo List</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=> setCount(count+1)}>Increment++</button>
            <Form addTodo={ addTodo } />
            <TodoList todos={todos} markTodoCompleted={markTodoCompleted} deleteTodo={deleteTodo } />
        </div>
    )
}

export default TodoApp
