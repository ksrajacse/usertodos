import { Component, OnInit } from '@angular/core';
import { TodosService, Todo } from '../shared';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Array<Todo>;
  selectedTodo: Todo;
  userId1:any;
  todolistArray:any =[];
  constructor(
    private todosService: TodosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userId1 = params['id'];
      
    });
    
    this.todosService.loadTodos()
      .subscribe(todos => {
        this.todos = todos;
        
      
        
      });
  }

  
  resetTodo() {
    let emptyTodo: Todo = {id: null, title: '', userId:''};
    this.selectedTodo = emptyTodo;
  }

  selectTodo(todo: Todo) {
    this.selectedTodo = todo;
  }

  saveTodo(todo: Todo) {
    this.todosService.saveTodo(todo)
      .subscribe(responseTodo => {
        if (todo.id) {
          this.replaceTodo(responseTodo);
        } else {
          this.pushTodo(responseTodo);
        }
      });

    // Generally, we would want to wait for the result of `todosService.saveTodo`
    // before resetting the current todo.
    this.resetTodo();
  }

  replaceTodo(todo: Todo) {
    this.todos = this.todos.map(mapTodo => {
      return mapTodo.id === todo.id ? todo : mapTodo;
    });
  }

  pushTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo)
      .subscribe(() => {
        this.todos.splice(this.todos.indexOf(todo), 1);
      });

    // Generally, we would want to wait for the result of `todosService.deleteTodo`
    // before resetting the current todo.
    this.resetTodo();
  }

  

  

}

