import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  {path: '',      redirectTo: '/users', pathMatch: 'full' },
  {path: 'users', component: UsersComponent},
  {path: 'todos/:id', component: TodosComponent},
  {path: '**',     redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
