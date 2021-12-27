import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstrumentModel } from '../models/instrument.model'
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

   // common of url address
   API_URL:string='http://192.168.0.13:3002/instruments' ;

  constructor(private _http: HttpClient) { }


  intrumentFrom:FormGroup = new FormGroup({
    sno:new FormControl(''),
    name:new FormControl(''),
    referenceno:new FormControl(''),
    range:new FormControl(''),
    calibratedon:new FormControl(''),
    calibratedue:new FormControl(''),
  });

  initializeFromGroup(){
    this.intrumentFrom.setValue({
      sno: '',
      name:'',
      referenceno: '',
      range:'',
      calibratedon:'',
      calibratedue:''
    });
  }


  getAlldepartment(): Observable<any> {
    return this._http.get(this.API_URL);
  }
 
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

