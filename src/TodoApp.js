import React, { useState } from 'react';
import './App.css'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
        console.log([...todos, input]);
        setInput('');
    }

    const handleDelete = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    }
    const handelDelete = () => {
        setTodos([])
    }

    return (
        <div className='container'>
            <div className='main'>
                <h1>Todo-List</h1>
                <form onSubmit={handleSubmit}>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='input' />
                    <button type="submit" className='input-btn'>Add Todo</button>
                </form>
                <ul style={{ listStyle: 'number' }}>
                    {todos.map((todo, index) => (
                        <li key={index} >
                            {todo}
                            <button onClick={() => handleDelete(index)}>Delete</button>

                        </li>

                    ))}
                    {todos.length > 1 && <button onClick={() => handelDelete()}>Delete All</button>}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
