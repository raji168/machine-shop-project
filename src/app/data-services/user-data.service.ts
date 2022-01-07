import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private users: User[] = []

  userUpdated$ = new BehaviorSubject<User[]>([])

  getUsers() {
    return [...this.users]
  }

  loadUsers(users: User[]) {

    this.users = users;
    this.userUpdated$.next(this.users)

  }

  addUser(user: User) {
    this.users = [...this.users, user]
    this.userUpdated$.next(this.users);
  }

  updateUser(userResponse: User) {
    const updateUser = this.users.find(user => user._id === userResponse._id)
    const updateUserIndex = this.users.findIndex(user => user._id === userResponse._id)
    const updatedUser = { ...updateUser, ...userResponse }
    this.users[updateUserIndex] = updatedUser
    console.log(this.users)
    this.userUpdated$.next(this.users);
  }
  deleteUser(id: string) {
    this.users = this.users.filter(user => user._id !== id);
    this.userUpdated$.next(this.users);
  }
}
