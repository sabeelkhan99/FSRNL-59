import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = (props) => {

    return (
        <ul>
            {
                props.todos.map((todo) => {
                    return <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        markTodoCompleted={props.markTodoCompleted}
                        deleteTodo={props.deleteTodo}
                    />
                })
            }
        </ul>
    )
}

export default TodoList
