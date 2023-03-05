import { createAction, props } from '@ngrx/store';
import { Todo } from '../types/todo';

export const create = createAction(
    '[Todo Component] Create',
    props<{todo: Todo}>(),
);
export const deleteTodo = createAction(
    '[Todo Component] Delete',
    props<{id: number}>(),
);
export const toggleComplete = createAction(
    '[Todo Component] Toggle Complete',
    props<{ id: number }>(),
);
