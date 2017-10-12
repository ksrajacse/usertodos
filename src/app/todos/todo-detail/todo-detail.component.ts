import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  originalName: string;
  selectedTodo: Todo;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set todo(value: Todo){
    if (value) { this.originalName = value.title; }
    this.selectedTodo = Object.assign({}, value);
  }
}
