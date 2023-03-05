import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
    todoForm = new FormGroup({
        title: new FormControl('', [
            Validators.required,
        ]),
    });

    @Output() todoSubmitted:EventEmitter<string> = new EventEmitter();

    submitForm () {
        this.todoSubmitted.emit(
            String(this.todoForm.value.title),
        );
        this.todoForm.reset();
    }

    getControl (control: string) {
        return this.todoForm.get(control);
    }
}
