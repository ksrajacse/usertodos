import { Component, OnInit } from '@angular/core';
import { UsersService, User,TodosService, Todo  } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  selectedUser: User;

  constructor(
    private usersService: UsersService,
    private widgetsService: TodosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.usersService.loadUsers()
      .subscribe(users => {
        this.users = users;
        
      });
  }

  
  selectUser(user: User) {
   
   this.selectedUser = user;
   this.router.navigate(['/todos', user.id]); 
   
  }

}


