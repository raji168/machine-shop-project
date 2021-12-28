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
    sno: new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    emailId : new FormControl('',Validators.required),
    phoneNo : new FormControl('',[Validators.required,Validators.minLength(10)]),
    userName : new FormControl('',Validators.required),
  });
   
  initializeFormGroup(){
    this.userForm.setValue({
      sno: '',
      name: '',
      role: '',
      emailId: '',
      phoneNo:'',
      userName: ''
    });
  }

  getUserAll() {
    const url = ` http://192.168.0.13:3002/users`;
    return this.http.get<User[]>(url);
  }
  
  addUser(user: User) {
    const url = ` http://192.168.0.13:3002/users`;
    return this.http.post<{ _id: String }>(url, user);
  }
}
