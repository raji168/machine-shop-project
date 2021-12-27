import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role} from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleApiService {

  constructor( private http:HttpClient) { }

  roleForm: FormGroup= new FormGroup({
    serialno: new FormControl(''),
    name: new FormControl('')
  });

  initializeFormGroup(){
    this.roleForm.setValue({
      serialno:'',
      name:''
    });
  }


  getRoleAll(){
    const url =` http://192.168.0.13:3002/roles`;
    return this.http.get<Role[]>(url);
  }

  addRole(role:Role){
    const url =` http://192.168.0.13:3002/roles`;
    return this.http.post<{_id:string}>(url,role);
  }
}
