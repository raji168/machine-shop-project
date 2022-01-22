import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { forkJoin, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserDataService } from '../data-services/user-data.service';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  url: string = 'http://192.168.0.17:3002/users';

  users: User[] = [];


  constructor(
    private http: HttpClient,
    private userDataService: UserDataService
  ) { }


  get(): Observable<any> {
    return this.http.get<User[]>(this.url)
    .pipe(
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
    return this.http.delete<User>(`${this.url}/${_id}`)
    .pipe(
      tap(user => {
        this.userDataService.deleteUser(user._id);
      })
    );
  }

  deleteSelectUser(users :User[]): Observable<User[]>{
    return forkJoin(users.map(user => this.http.delete<User>(`${this.url}/${user._id}`)))
  }

}
