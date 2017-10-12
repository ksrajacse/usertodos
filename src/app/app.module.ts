import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import { UsersService, TodosService } from './shared';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { RouterLinkStubDirective }   from './testing';
import { RouterOutletStubComponent } from './testing';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    TodosComponent,
    TodosListComponent,
	RouterLinkStubDirective,
	RouterOutletStubComponent,
    TodoDetailComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule
  ],
  providers: [UsersService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
