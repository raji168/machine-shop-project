import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getShiftAll() {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.get<User[]>(url);
  }
}
