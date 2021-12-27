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
    serialNo: new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    contactNo : new FormControl('',[Validators.required,Validators.minLength(10)]),
    userName : new FormControl('',Validators.required),
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
