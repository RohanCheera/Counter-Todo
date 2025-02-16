import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';
import './AddTodo.css'; // Import the CSS file

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
