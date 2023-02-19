import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { TodoType } from '../types/TodoType';

interface TodoContextType {
  todos: TodoType[];
  handleAddTodo: (text: string) => void;
  handleUpdateTodo: (id: string, text: string, completed: boolean) => void;
  handleDeleteTodo: (id: string) => void;
}

const endpoint = 'http://localhost:3000';

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  useEffect(() => {
    axios.get(`${endpoint}/todo`).then((res) => {
      setTodos(res.data);
    });
  }, []);

  const handleAddTodo = (text: string) => {
    const now = new Date().toLocaleString();
    axios.post(`${endpoint}/todo`, { text, createdAt: now }).then(({ data }) => {
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
    <TodoContext.Provider value={{ todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
