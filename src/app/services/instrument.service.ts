import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Subject } from 'rxjs';
import { InstrumentModel } from '../models/instrument.model'
import { FormControl, FormGroup } from '@angular/forms';
import { tap  } from 'rxjs/operators';
import { InstrumentDataService } from '../data-services/instrument-data.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  
  API_URL : string = 'http://192.168.0.13:3002/instruments';

  // private reFresh = new Subject<void>();

  
  instruments : InstrumentModel[] = [];  
  
  instrumentUpdated = new Subject();

  constructor(
    private _http: HttpClient,
    private instrumentDataServivce : InstrumentDataService
  ) { }

  form: FormGroup = new FormGroup({
    sno: new FormControl(''),
    name: new FormControl(''),
    referenceno: new FormControl(''),
    range: new FormControl(''),
    calibratedon: new FormControl(''),
    calibratedue: new FormControl('')
  });


  get() {
    return this._http.get(this.API_URL)
    .pipe(
      tap((instruments) => {
      this.instrumentDataServivce.loadInstrument(instruments)
      })
    )
  }


  addInstrument(instrument: InstrumentModel) {
    return this._http.post<InstrumentModel>(this.API_URL, instrument)
    .pipe(
      tap((instrument) =>{
        this.instrumentDataServivce.addInstrument(instrument)
      })
    );
  }

  updateInstrument(instrument: Partial<InstrumentModel>, id) {
    return this._http.patch<InstrumentModel>(`${this.API_URL}/${id}`, instrument)
    .pipe(
      tap(() =>{
        this.instrumentDataServivce.updateInstrument(instrument)
      })
    );
  }

  deleteInstrument(_id:string){
    return this._http.delete(`${this.API_URL}/${_id}`);
  }

}









