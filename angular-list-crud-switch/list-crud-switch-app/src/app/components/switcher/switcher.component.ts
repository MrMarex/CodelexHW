import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.scss'],
})

export class SwitcherComponent {
    @Output() switcherValue: EventEmitter<boolean> = new EventEmitter();

    isChecked = true;

    switcherHandler () {
        this.isChecked = !this.isChecked;
        this.switcherValue.emit(this.isChecked);
    }
}
