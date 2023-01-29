import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e: any) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e: any) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 100 }]);
    setInputText("");
  }

  const statusHandler = (e: any) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input value={ inputText } onChange={ inputTextHandler } type="text" className="todo-input" />
      <button onClick={ submitTodoHandler } className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={ statusHandler } name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;