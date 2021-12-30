import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { InstrumentModel } from '../models/instrument.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  // common of url address
  

  API_URL: string = 'http://192.168.0.13:3002/instruments';
  

  

  constructor(private _http: HttpClient) { }

  private reFresh = new Subject<void>();


  form: FormGroup = new FormGroup({
    sno: new FormControl(''),
    name: new FormControl(''),
    referenceno: new FormControl(''),
    range: new FormControl(''),
    calibratedon: new FormControl(''),
    calibratedue: new FormControl('')
  });

  initializeFromGroup() {
    this.form.setValue({
      sno: '',
      name: '',
      referenceno: '',
      range: '',
      calibratedon: '',
      calibratedue: ''
    });
  }

  getreFreshAll(){
    return this.reFresh;
  }




  getInstrumentAll(): Observable<any> {
    return this._http.get(this.API_URL);
  }

  addInstrument(instrument: InstrumentModel) {
    return this._http.post<{ _id: string }>(this.API_URL, instrument)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }

  updateInstrument(instrument: Partial<InstrumentModel>, id) {
    return this._http.patch<InstrumentModel>(`${this.API_URL}/${id}`, instrument)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }

  deleteInstrument(_id:string){
    return this._http.delete(`${this.API_URL}/${_id}`);
  }

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