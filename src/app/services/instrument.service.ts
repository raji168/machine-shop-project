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
   API_URL:string='http://192.168.0.12:3002' ;

   MaxOrdNo:number=0;
 
   constructor(private _http: HttpClient) { }
   
   form:FormGroup = new FormGroup({
     deptid:new FormControl(null),
     deptname:new FormControl(''),
     ordno:new FormControl(''),
     mstatus:new FormControl(''),
     updby:new FormControl(''),
     updon:new FormControl(''),
   });
 
   initializeFromGroup(){
     this.form.setValue({
       deptid: 0,
       deptname:'',
       ordno: 0,
       mstatus:'',
       updby:'',
       updon:''
     });
   }
 
   getAlldepartment(): Observable<any> {
   return this._http.get(this.API_URL+'/roles');
   }
   // getDepartmentMaxOrNo() :Observable<number>{
   //   return this._http.get<number>(this.API_URL+'/roles/GetDepartmentMaxOrdNo');
   // }
   insUpDepartment(department: InstrumentModel): Observable<any> {
     const httpOptions = { headers : new HttpHeaders({ 'Content-Type' : 'application/json'}) };
     return this._http.post(this.API_URL +'/roles', department, httpOptions);
   }
   delDepartment(id:number): Observable<number> {
     const httpOptions = { headers : new HttpHeaders({ 'Content-Type' : 'application/json'}) };
   //  soft Delete,So use post method to update msstatus=0
     return this._http.post<number>(this.API_URL +'/roles?id='+id, httpOptions);
    }
}

