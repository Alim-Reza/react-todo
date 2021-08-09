import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
    const [ inputValue, setInputValue ] = useState('');
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="new todo"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}                
                />
            <button className="new-todo-button">Creat Todo</button>
        </div>
    );
};


export default NewTodoForm;