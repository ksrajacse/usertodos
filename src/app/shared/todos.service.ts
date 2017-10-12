import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//const BASE_URL = 'https://localhost:3000/todos/';
const BASE_URL = 'https://ksrajacse.github.io/usertodos/todos';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TodosService {
  constructor(private http: Http) {}

  loadTodos() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(todos => todos.map(todo => Object.assign({}, todo)));
  }

  loadTodo(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  saveTodo(todo: Todo) {
    return (todo.id) ? this.updateTodo(todo) : this.createTodo(todo);
  }

  createTodo(todo: Todo) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(todo), HEADER)
      .map(res => res.json());
  }

  updateTodo(todo: Todo) {
   

    return this.http.patch(`${BASE_URL}${todo.id}`, JSON.stringify(todo), HEADER)
      .map(res => res.json())
      .map(w => Object.assign({}, w));
  }

  deleteTodo(todo: Todo) {
    return this.http.delete(`${BASE_URL}${todo.id}`)
      .map(res => res.json());
  }
}
