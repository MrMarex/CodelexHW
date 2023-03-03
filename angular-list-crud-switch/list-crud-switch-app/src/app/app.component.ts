import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CarsService, Car } from './services/cars.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
    constructor (private carsService: CarsService) {}

    cars$: Observable<Car[]>;

    loading = false;

    category = 'electric';

    ngOnInit () {
        this.loading = true;
        this.cars$ = this.carsService.getCarByCategory(this.category).pipe(
            tap(() => this.loading = false),
        );
    }

    postCar (data:Omit<Car, '_id'>) {
        this.carsService.postCar(data).subscribe(() => this.ngOnInit());
    }

    deleteCar (id: string) {
        this.carsService.deleteCar(id).subscribe(() => this.ngOnInit());
    }

    categoryChanger (switchValue: boolean) {
        this.category = switchValue ? 'electric' : 'internal combustion';
        this.ngOnInit();
    }
}
