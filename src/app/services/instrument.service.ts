import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstrumentModel } from '../models/instrument.model'

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  API_URL: string = 'http://192.168.0.13:3002/instruments';

  MaxOrdNo: number = 0;

  constructor(private _http: HttpClient) { }

 

  getAlldepartment(): Observable<any> {
    return this._http.get(this.API_URL);
  }
  // getDepartmentMaxOrNo() :Observable<number>{
  //   return this._http.get<number>(this.API_URL+'/roles/GetDepartmentMaxOrdNo');
  // }
  insUpDepartment(department: InstrumentModel): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post(this.API_URL + '/roles', department, httpOptions);
  }
  delDepartment(id: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //  soft Delete,So use post method to update msstatus=0
    return this._http.post<number>(this.API_URL + '/roles?id=' + id, httpOptions);
  }
}

