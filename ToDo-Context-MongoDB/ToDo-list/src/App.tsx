import { TodoProvider } from './Context/TodoContext';
import TodoList from './Components/TodoList';
import './App.css'

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;