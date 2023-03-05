import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './components/cars/home-component/home-list.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

const routes: Routes = [
    { path: 'info-list', component: InfoListComponent },
    { path: '', component: HomeListComponent },
    { path: 'todo-list', component: TodoPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
