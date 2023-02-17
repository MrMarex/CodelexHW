import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';
import { TodoType } from '../types/TodoType';

const endpoint = 'http://localhost:3000';

type TodoContextType = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleAddTodo: (newTodoText: string) => void;
  handleUpdateTodo: (id: string, text: string, completed: boolean) => void;
  handleDeleteTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => null,
});

type Props = {
  children: ReactNode;
};

export function TodoProvider({ children }: Props) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    axios.get(`${endpoint}/todo`).then((res) => {
      setTodos(res.data);
    });
  }, []);

  const handleAddTodo = (newTodoText: string) => {
    const now = new Date().toLocaleString();
    axios.post(`${endpoint}/todo`, { text: newTodoText, createdAt: now }).then(({ data }) => {
      setTodos([...todos, { ...data, _id: data._id }]);
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

  const value = {
    todos,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
