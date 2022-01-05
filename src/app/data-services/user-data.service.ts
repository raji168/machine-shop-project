import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private users: User[] =[]
  
  userUpdated$ = new Subject<User[]>()

  getUsers() {
    return[...this.users]
  }

  loadUsers(users: User[]) {
    this.users = users;
  }

  addUser(user : User) {
    this.users = [...this.users, user]
    this.userUpdated$.next(this.users);
  }

  updateUser(userResponse: User) {
    const updateUser = this.users.find(user => user._id === user._id)
    const updateUserIndex = this.users.findIndex(user => user._id === user._id)
    const updatedUser = {...updateUser, ...userResponse}
    this.users[updateUserIndex] = updatedUser
    this.userUpdated$.next(this.users);
  }
  constructor() { }
}
