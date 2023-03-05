import {
    Component, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
    selector: 'app-car-item',
    templateUrl: './car-item.component.html',
    styleUrls: ['./car-item.component.scss'],
})
export class CarItemComponent {
  @Input() category: string;

  @Input() name: string;

  @Output() deleteHandler: EventEmitter<void> = new EventEmitter();
}
