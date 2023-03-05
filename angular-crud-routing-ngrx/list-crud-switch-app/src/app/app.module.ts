import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitcherComponent } from './components/cars/switcher/switcher.component';
import { CarItemComponent } from './components/cars/car-item/car-item.component';
import { FormComponent } from './components/cars/form/form.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { HomeListComponent } from './components/cars/home-component/home-list.component';
import { Car } from './services/cars.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { todoReducer } from './store/reducers/todo.reducer';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export interface AppState {
    carList: {
      cars: Car[];
      loading: boolean;
      error: string | null;
      category: string;
    }
}

@NgModule({
    declarations: [
        AppComponent,
        SwitcherComponent,
        CarItemComponent,
        FormComponent,
        CarListComponent,
        InfoListComponent,
        HomeListComponent,
        TodoFormComponent,
        TodoItemComponent,
        TodoPageComponent,
        TodoListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule,
        StoreModule.forRoot({ todo: todoReducer }),
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
