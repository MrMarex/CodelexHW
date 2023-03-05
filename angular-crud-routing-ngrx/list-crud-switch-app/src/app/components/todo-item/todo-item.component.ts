import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleComplete } from 'src/app/store/actions/todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
    @Input() todo: string;

    @Input() completed: boolean;

    @Input() id: number;

    @Output() deleteHandler: EventEmitter<void> = new EventEmitter();

    constructor (private store: Store) { }

    toggleCompleted () {
        this.store.dispatch(toggleComplete({ id: this.id }));
    }
}
