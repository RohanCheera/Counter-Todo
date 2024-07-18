import React from 'react';
import './TodoItem.css'; // Import the CSS file

const TodoItem = ({ todo, onToggle, onRemove }) => (
  <li>
    <span
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={onToggle}
    >
      {todo.text}
    </span>
    <button onClick={onRemove}>Remove</button>
  </li>
);

export default TodoItem;
