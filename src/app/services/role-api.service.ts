import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role} from '../models/role.model';
import { Observable, Subject } from 'rxjs';
import { tap  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoleApiService {


  private reFresh = new Subject<void>();

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

  getreFreshAll(){
    return this.reFresh;
  }

  getRoleAll(){
    const url =` http://192.168.0.13:3002/roles`;
    return this.http.get<Role[]>(url)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }


  addRole(role:Role){
    const url =` http://192.168.0.13:3002/roles`;
    return this.http.post<{_id:string}>(url,role);
  }

  updateInstrument(role: Partial<Role>, id) {
    const url =` http://192.168.0.13:3002/roles`;
    return this.http.patch<Role>(`${url}/${id}`, role)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }

  deleteRole(_id:string){
    const url = `http://192.168.0.13:3002/roles`;
    return this.http.delete(`${url}/${_id}`);
  }

 
  
}
