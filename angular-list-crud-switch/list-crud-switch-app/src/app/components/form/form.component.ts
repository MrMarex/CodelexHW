import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from 'src/app/services/cars.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})

export class FormComponent {
    categories = ['electric', 'internal combustion'];

    carForm = new FormGroup({
        name: new FormControl('', [
            Validators.required,
        ]),
        category: new FormControl('', Validators.required),
    });

    @Output() carSubmitted:EventEmitter<Omit<Car, '_id'>> = new EventEmitter();

    submitForm () {
        this.carSubmitted.emit({
            category: String(this.carForm.value.category),
            name: String(this.carForm.value.name),
        });
        this.carForm.reset({ category: '' });
    }

    getControl (control: string) {
        return this.carForm.get(control);
    }
}
