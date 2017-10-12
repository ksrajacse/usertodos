import { Component, Input, Output, EventEmitter,OnInit} from '@angular/core';
import { Todo } from '../../shared';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent{
  
  
   
  @Input() todos: Todo[];
  @Input('userId1') masterName: string;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() featured = new EventEmitter();
}
