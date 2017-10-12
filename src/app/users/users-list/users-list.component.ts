import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() users: User[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() featured = new EventEmitter();
}
