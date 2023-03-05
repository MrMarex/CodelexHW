import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export type Car = {
    _id?:string;
    name: string;
    category: string;
}

@Injectable({
    providedIn: 'root',
})

export class CarsService {
    constructor (
      private http: HttpClient,
    ) {}

    deleteCar (id: string) {
        return this.http
            .delete(`http://localhost:3004/cars/${id}`)
            .pipe(catchError(this.errorHandler.bind(this)));
    }

    postCar (data:Omit<Car, '_id'>) {
        return this.http
            .post<Car>('http://localhost:3004/cars', data)
            .pipe(catchError(this.errorHandler.bind(this)));
    }

    getCarByCategory (category: string) {
        return this.http
            .get<Car[]>(`http://localhost:3004/cars/category/${category}`)
            .pipe(catchError(this.errorHandler.bind(this)));
    }

    private errorHandler (error:HttpErrorResponse) {
        return throwError(() => error.message);
    }
}
