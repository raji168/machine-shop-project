import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  userForm: FormGroup = new FormGroup({
    serialNo: new FormControl(''),
    name : new FormControl(''),
    role : new FormControl(''),
    email : new FormControl(''),
    contactNo : new FormControl(''),
    userName : new FormControl(''),
  });
   
  initializeFormGroup(){
    this.userForm.setValue({
      serialNo: '',
      name: '',
      role: '',
      email: '',
      contactNo:'',
      userName: ''
    });
  }

  getShiftAll() {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.get<User[]>(url);
  }
}
