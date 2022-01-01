import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { tap  } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private reFresh = new Subject<void>();


  constructor(private http: HttpClient) { }

  userForm: FormGroup = new FormGroup({
    sno: new FormControl(''),
    name : new FormControl(''),
    role : new FormControl(''),
    emailId : new FormControl(''),
    phoneNo : new FormControl(''),
    userName : new FormControl(''),
  });
   
  initializeFormGroup(){
    this.userForm.setValue({
      sno: '',
      name: '',
      role: 'Role',
      emailId: '',
      phoneNo:'',
      userName: ''
    });
  }

  getreFreshAll(){
    return this.reFresh;
  }

  getUserAll() {
    const url = ` http://192.168.0.13:3002/users`;
    return this.http.get<User[]>(url);
  }
  
  addUser(user: User) {
    const url = ` http://192.168.0.13:3002/users`;
    return this.http.post<{ _id: String }>(url, user)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }

  updateUser(user: Partial<User>, id) {
    const url =` http://192.168.0.13:3002/users`;
    return this.http.patch<User>(`${url}/${id}`, user)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }

  deleteUser(_id:string){
    const url = `http://192.168.0.13:3002/users`;
    return this.http.delete(`${url}/${_id}`);
  }


}
