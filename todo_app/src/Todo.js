import React from "react";
import "./Todo.css";

function Todo({todo, id, handleRemove}) {
    return (
    <div>
        <li>{todo}<button className="Todo-remove-btn" onClick={() => handleRemove(id)}>X</button></li>
    </div>
    )
}

export default Todo;