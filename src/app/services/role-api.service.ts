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

  url: string = 'http://192.168.0.13:3002/roles';

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
    return this.http.get<Role[]>(this.url)
  }


  addRole(role:Role){
    return this.http.post<{_id:string}>(this.url,role)
    .pipe(
        tap(() =>{
          this.reFresh.next();
        })
      );
  }

  updateRole(role: Partial<Role>, id) {
    return this.http.patch<Role>(`${this.url}/${id}`, role)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }

  deleteRole(_id:string){
    return this.http.delete(`${this.url}/${_id}`);
  }
}
