import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import "./NewBoxForm.css";

function NewBoxForm({addBox}) {
    const initialState = {
        height: "",
        width: "",
        backgroundColor: ""
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
        addBox({...formData, id:uuid()});
        setFormData(initialState);
    }

    return (
        <div className="NewBoxForm">
            <form onSubmit={handleSubmit}>
                <div className="NewBoxForm-input">
                    <label htmlFor="height">Height</label>
                    <input 
                        id="height" 
                        onChange={handleChange} 
                        name="height" 
                        value={formData.height} />
                </div>
                <div className="NewBoxForm-input">
                    <label htmlFor="width">Width</label>
                    <input 
                        id="width" 
                        onChange={handleChange} 
                        name="width" 
                        value={formData.width} />
                </div>
                <div className="NewBoxForm-input">
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input 
                        id="backgroundColor" 
                        onChange={handleChange} 
                        name="backgroundColor" 
                        value={formData.backgroundColor} />
                </div>
                <button>Add a Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;