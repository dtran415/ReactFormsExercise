import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos(todos => [...todos, todo]);
    }

    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const todoComponents = (
        <ul>
            {todos.map(todo => (
                <Todo 
                    key={todo.id}
                    id={todo.id}
                    handleRemove={removeTodo}
                    todo={todo.todo}
                />
            ))}
        </ul>
    )

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todoComponents}
        </div>
    )
}

export default TodoList;