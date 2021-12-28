import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role} from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleApiService {


  maxSerialno: number = 0;

  constructor( private http:HttpClient) { }

  roleForm: FormGroup= new FormGroup({
    serialno: new FormControl(''),
    name: new FormControl('')
  });

  initializeFormGroup(){
    this.roleForm.setValue({
      serialno:this.maxSerialno,
      name:''
    });
  }


  getRoleAll(){
    const url =` http://192.168.0.13:3002/roles`;
    return this.http.get<Role[]>(url);
  }

  getRoleMaxSerialno() {
    return this.http.get<number>('http://192.168.0.13:3002/roles/GetRoleMaxSerialno')
  }

  addRole(role:Role){
    const url =` http://192.168.0.13:3002/roles`;
    return this.http.post<{_id:string}>(url,role);
  }

  deleteRole(_id:string){
    const url = `http://192.168.0.13:3002/roles`;
    return this.http.delete(`${url}/${_id}`);
  }

  getRoleById(_id : any){
    const url = `http://192.168.0.13:3002/roles`;
    return this.http.get(`${url}/${_id}`);
  }
  
}
