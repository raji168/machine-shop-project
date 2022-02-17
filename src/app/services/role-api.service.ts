import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RoleDataService } from '../data-services/role-data.service';


@Injectable({
  providedIn: 'root'
})
export class RoleApiService {

  url: string = 'http://192.168.0.17:3002/roles';


  roles: Role[] = [];

  // roleUpdated = new Subject();

  constructor(
    private http: HttpClient,
    private roleDataService: RoleDataService
  ) { }


  get(): Observable<any> {
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
    return this.http.delete<Role>(`${this.url}/${_id}`).pipe(
      tap(role => {
        this.roleDataService.deleteRole(role._id)
      })
    );

  }
}
