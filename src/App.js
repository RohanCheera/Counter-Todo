import Counter from "./features/counter/Counter";
import TodoList from "./features/todos/TodoList";
import AddTodo from "./features/todos/AddTodo";
import { useState } from 'react';

function App() {
  const [flag, setFlag] = useState(false);

  const toggleFlag = () => {
    setFlag(prevFlag => !prevFlag);
  };

  return (
    <div className="App">
      <button onClick={toggleFlag}>Toggle</button>
      {
        flag ? <Counter /> :
        <div>
          <h1>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      }
    </div>
  );
}

export default App;
