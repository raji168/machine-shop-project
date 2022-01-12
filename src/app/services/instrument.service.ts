import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, Subject } from 'rxjs';
import { InstrumentModel } from '../models/instrument.model'
import { tap  } from 'rxjs/operators';
import { InstrumentDataService } from '../data-services/instrument-data.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  
  API_URL : string = 'http://192.168.0.17:3002/instruments';

  
  instruments : InstrumentModel[] = [];  
  

  constructor(
    private _http: HttpClient,
    private instrumentDataServivce : InstrumentDataService
  ) { }

  


  get():Observable<any> {
    return this._http.get<InstrumentModel[]>(this.API_URL).pipe(
      tap((instruments) => {
        this.instrumentDataServivce.loadInstruments(instruments)
      })
    )
  }


  addInstrument(instrument: InstrumentModel) {
    return this._http.post<InstrumentModel>(this.API_URL, instrument)
    .pipe(
      tap((instrument) => {
        this.instrumentDataServivce.addInstrument(instrument)
      })
    );
  }

  updateInstrument(instrument: Partial<InstrumentModel>, id) {
    return this._http.patch<InstrumentModel>(`${this.API_URL}/${id}`, instrument)
    .pipe(
      tap(instrument => {
        this.instrumentDataServivce.updateInstrument(instrument)
      })
    );
  }

  deleteInstrument(_id:string){
    return this._http.delete<InstrumentModel>(`${this.API_URL}/${_id}`).pipe(
      tap(instrument =>{
        this.instrumentDataServivce.deleteInstrument(instrument._id)
      })
    );
  }

}









