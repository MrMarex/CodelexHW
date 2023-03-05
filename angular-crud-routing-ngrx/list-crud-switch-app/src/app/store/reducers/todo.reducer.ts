import { createReducer, on } from '@ngrx/store';
import { Todo } from '../types/todo';
import { create, deleteTodo, toggleComplete } from '../actions/todo.actions';

const todoListString = localStorage.getItem('todoList');
const initialState: Todo[] = todoListString ? JSON.parse(todoListString) : [];

export const todoReducer = createReducer(
    initialState,
    on(create, (state, { todo }) => [...state, todo]),
    on(deleteTodo, (state, { id }) => state.filter((todo, i) => i !== id)),
    on(toggleComplete, (state, { id }) => state.map((todo, i) => {
        if (i === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    })),
);
