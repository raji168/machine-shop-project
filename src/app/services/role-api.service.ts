import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role} from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleApiService {

  constructor( private http:HttpClient) { }


  getRoleAll(){
    const url =` http://192.168.0.13:3002/roles`;
    return this.http.get<Role[]>(url);
  }
}
