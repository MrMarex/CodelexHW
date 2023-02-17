import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { TodoType } from './types/TodoType';

const endpoint = 'http://localhost:3000';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    axios.get(`${endpoint}/todo`).then((res) => {
      setTodos(res.data);
    });
  }, []);

  const handleAddTodo = () => {
    const now = new Date().toLocaleString();
    axios.post(`${endpoint}/todo`, { text: newTodoText, createdAt: now }).then(({ data }) => {
      setTodos([...todos, { ...data, _id: data._id }]);
      setNewTodoText('');
    });
  };
  
  const handleUpdateTodo = (id: string, text: string, completed: boolean) => {
    const todo = todos.find((todo) => todo._id === id);
    if (!todo) {
      return;
    }
    const { _id, ...updatedTodo } = { ...todo, text, completed };
    axios.put(`${endpoint}/todo/${id}`, updatedTodo).then(({data}) => {
      const updatedTodos = todos.map((todo) => {
        if (todo._id === id) {
          return data;
        } else {
          return todo;
        }
      });
      setTodos(updatedTodos);
    });
  };
  
  const handleDeleteTodo = (id: string) => {
    axios.delete(`${endpoint}/todo/${id}`).then(() => {
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      setTodos(updatedTodos);
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={(e) => {
        //With this function it updates list but you can not mark as done newly added tasks
        //e.preventDefault();
        handleAddTodo();
      }}>
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

export default App;