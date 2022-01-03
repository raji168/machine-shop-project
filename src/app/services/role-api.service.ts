import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role } from '../models/role.model';
import {  Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RoleDataService } from '../data-services/role-data.service';


@Injectable({
  providedIn: 'root'
})
export class RoleApiService {

  url: string = 'http://192.168.0.13:3002/roles';

  private reFresh = new Subject<void>();

  roles: Role[] = [];

  roleUpdated = new Subject();

  constructor(
    private http: HttpClient,
    private roleDataService: RoleDataService
    ) { }

  roleForm: FormGroup = new FormGroup({
    serialno: new FormControl(''),
    name: new FormControl('')
  });

  // getRoles() {
  //   return [...this.roles]
  // }

  // addRoleData(roleData) {
  //   this.roles = [...this.roles, roleData]
  //   this.roleUpdated.next(this.roles);
  // }

  // initializeFormGroup() {
  //   this.roleForm.setValue({
  //     serialno: '',
  //     name: ''
  //   });
  // }

  // getreFreshAll() {
  //   return this.reFresh;
  // }

  get() {
    return this.http.get<Role[]>(this.url).pipe(
      tap((roles) => {
          this.roleDataService.loadRoles(roles)
      })
    )
  }


  addRole(role: Role) {
    return this.http.post<Role>(this.url, role)
      .pipe(
        tap((role) => {
          this.roleDataService.addRole(role)
        })
      );
  }

  updateRole(role: Partial<Role>, id) {
    return this.http.patch<Role>(`${this.url}/${id}`, role)
      .pipe(
        tap(role => {
          this.roleDataService.updateRole(role)
        })
      );
  }

  deleteRole(_id: string) {
    return this.http.delete(`${this.url}/${_id}`);
  }
}
