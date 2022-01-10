import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Machine } from '../models/machine.model';
import { tap } from 'rxjs/operators';
import { MachineDataService } from '../data-services/machine-data.service';

@Injectable({
  providedIn: 'root'
})
export class MachineApiService {

  baseUrl: string = `http://192.168.0.17:3002/machines`;

  machines: Machine[] = [];

  // machineUpdated = new Subject();

  constructor(
    private http: HttpClient,
    private machineDataService: MachineDataService
  ) { }

  getMachineAll():Observable<any> {

    return this.http.get<Machine[]>(this.baseUrl)
      .pipe(
        tap((machines) => {
          this.machineDataService.loadMachine(machines)
        })
      );
  }

  addMachine(machine: Machine) {


    return this.http.post<Machine>(this.baseUrl, machine)
      .pipe(
        tap((machine) => {
          this.machineDataService.addMachine(machine)
        })
      );
  }


  updateMachine(machine: Partial<Machine>, id) {

    return this.http.patch<Machine>(`${this.baseUrl}/${id}`, machine)
      .pipe(
        tap((machine) => {
          this.machineDataService.updateMachine(machine)
        })
      );
  }

  deleteMachine(_id: string) {

    return this.http.delete<Machine>(`${this.baseUrl}/${_id}`)
    .pipe(
      tap(machine=>{
        this.machineDataService.deleteMachine(machine._id)
      })
    );

}

}

