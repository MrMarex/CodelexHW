import { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContext';
import { TodoType } from '../types/TodoType';

function TodoList() {
  const { todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo } = useContext(TodoContext)!;
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(newTodoText);
    setNewTodoText('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodoSubmit}>
        <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleUpdateTodo(todo._id!, todo.text, !todo.completed)}
            />
            {todo.text}
            <span>Created at: {new Date(todo.createdAt).toLocaleString()}</span>
            <button onClick={() => handleDeleteTodo(todo._id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
