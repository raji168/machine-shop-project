import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserDataService } from '../data-services/user-data.service';




@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  url: string = 'http://192.168.0.13:3002/users';

  users: User[] = [];

  userUpdated = new Subject();

  constructor(
    private http: HttpClient,
    private userDataService: UserDataService
  ) { }


  get() {
    return this.http.get<User[]>(this.url).pipe(
      tap((users) => {
        this.userDataService.loadUsers(users)
      })
    )
  }

  addUser(user: User) {
    return this.http.post<User>(this.url, user)
      .pipe(
        tap((user) => {
          this.userDataService.addUser(user)
        })
      );
  }

  updateUser(user: Partial<User>, id) {
    return this.http.patch<User>(`${this.url}/${id}`, user)
      .pipe(
        tap(user => {
          this.userDataService.updateUser(user)
        })
      );
  }

  deleteUser(_id: string) {
    return this.http.delete(`${this.url}/${_id}`);
  }
}
