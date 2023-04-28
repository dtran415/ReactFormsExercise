import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import "./NewTodoForm.css"

function NewTodoForm({addTodo}) {
    const initialState = {
        todo: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData( formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({...formData, id:uuid()});
        setFormData(initialState);
    }

    return (
        <div className="NewTodoForm">
            <form onSubmit={handleSubmit}>
                <div className="NewTodoForm-input">
                    <label htmlFor="todo">To Do</label>
                    <input 
                        id="todo" 
                        onChange={handleChange} 
                        name="todo" 
                        value={formData.todo} />
                </div>
                <button>Add To Do</button>
            </form>
        </div>
    )
}

export default NewTodoForm;