import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//const BASE_URL = 'https://localhost:3000/users/';

const BASE_URL = 'https://github.com/ksrajacse/usertodos/assets/users';

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  loadUsers() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(users => users.map(user => Object.assign({}, user)));
  }

  loadUser(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  saveUser(user: User) {
    return (user.id) ? this.updateUser(user) : this.createUser(user);
  }

  createUser(user: User) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(user), HEADER)
      .map(res => res.json());
  }

  updateUser(user: User) {
    

    return this.http.patch(`${BASE_URL}${user.id}`, JSON.stringify(user), HEADER)
      .map(res => res.json())
      .map(i => Object.assign({}, i));
  }

  deleteUser(user: User) {
    return this.http.delete(`${BASE_URL}${user.id}`)
      .map(res => res.json());
  }
}
