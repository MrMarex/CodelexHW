import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { create, deleteTodo } from 'src/app/store/actions/todo.actions';
import { Todo } from 'src/app/store/types/todo';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
    todo$: Observable<Todo[]>;

    constructor (private store: Store<{ todo: Todo[] }>) {
        this.todo$ = store.select('todo');
    }

    ngOnInit () {
        const todoListString = localStorage.getItem('todoList');
        const todoList = todoListString ? JSON.parse(todoListString) : [];
        this.updateLocalStorage(todoList);
    }

    create (title: string) {
        const todo: Todo = { title, completed: false };
        this.store.dispatch(create({ todo }));
    }

    delete (id: number) {
        this.store.dispatch(deleteTodo({ id }));
    }

    updateLocalStorage (todoList: Todo[]) {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }
}
