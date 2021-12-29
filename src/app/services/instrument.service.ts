import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstrumentModel } from '../models/instrument.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

   // common of url address

  API_URL: string = 'http://192.168.0.13:3002/instruments';

  constructor(private _http: HttpClient) { }

  
  form:FormGroup = new FormGroup({
    sno:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    referenceno:new FormControl(''),
    range:new FormControl('',Validators.required),
    calibratedon:new FormControl('',Validators.required),
    calibratedue:new FormControl('',Validators.required),
  });

  initializeFromGroup(){
    this.form.setValue({
      sno: 0,
      name:'',
      referenceno: 0,
      range:'',
      calibratedon:'',
      calibratedue:''
    });
  }

  getInstrument(): Observable<any> {
    return this._http.get(this.API_URL);
  }
 
  // insUpDepartment(department: InstrumentModel): Observable<any> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this._http.post(this.API_URL + '/roles', department, httpOptions);
  // }
  // delDepartment(id: number): Observable<number> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   //  soft Delete,So use post method to update msstatus=0
  //   return this._http.post<number>(this.API_URL + '/roles?id=' + id, httpOptions);
  // }
}

