import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  forkJoin, Observable, Subject } from 'rxjs';
import { InstrumentModel } from '../models/instrument.model'
import { tap  } from 'rxjs/operators';
import { MachineMapping } from '../models/machinemapping.model';
import { MachineMappingDataService } from '../data-services/machinemapping-data.service';

@Injectable({
  providedIn: 'root'
})
export class MachineMappingApiService {
  
  API_URL : string = 'http://192.168.0.17:3002/';

  
    machinemapping : MachineMapping [];

  constructor(
    private http: HttpClient,
    private machineMapDataServivce : MachineMappingDataService
  ) { }

  


  get():Observable<any> {
    return this.http.get<MachineMapping[]>(this.API_URL).pipe(
      tap((machineMaps) => {
        this.machineMapDataServivce.loadMachineMap(machineMaps)
      })
    )
  }


  addMachineMap(machineMap: MachineMapping) {
    return this.http.post<MachineMapping>(this.API_URL, machineMap)
    .pipe(
      tap((machineMap) => {
        this.machineMapDataServivce.addMachineMap(machineMap)
      })
    );
  }

  updateMachineMap(machineMap: Partial<MachineMapping>, id) {
    return this.http.patch<MachineMapping>(`${this.API_URL}/${id}`, machineMap)
    .pipe(
      tap(machineMap => {
        this.machineMapDataServivce.updateMachineMap(machineMap)
      })
    );
  }

  deleteMachineMap(_id:string){
    return this.http.delete<MachineMapping>(`${this.API_URL}/${_id}`).pipe(
      tap(machineMap =>{
        this.machineMapDataServivce.deleteMachineMap(machineMap.id)
      })
    );
  }

  deleteSelectMachineMap(machineMaps :MachineMapping[]): Observable<MachineMapping[]>{
    return forkJoin(machineMaps.map(machineMap => this.http.delete<MachineMapping>(`${this.API_URL}/${machineMap.id}`)))
  }

}









