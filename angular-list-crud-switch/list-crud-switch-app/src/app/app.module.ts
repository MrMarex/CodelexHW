import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { FormComponent } from './components/form/form.component';
import { CarListComponent } from './components/car-list/car-list.component';

@NgModule({
    declarations: [
        AppComponent,
        SwitcherComponent,
        CarItemComponent,
        FormComponent,
        CarListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
