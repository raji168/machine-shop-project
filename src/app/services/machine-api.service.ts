import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Machine } from '../models/machine.model';
import { tap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachineApiService {

  private reFresh = new Subject<void>();

  constructor(private http: HttpClient) { }

  refreshAll(){
    return this.reFresh;
  }

  getMachineAll() {
    const url = `http://192.168.0.13:3002/machines`;
    return this.http.get<Machine[]>(url);
  }

  addMachine(machine: Machine) {
    const url = `http://192.168.0.13:3002/machines`;
    return this.http.post<{ machinename: String }>(url, machine);
  }
  

  updateMachine(machine: Partial<Machine>, _id: string) {
    const url = ` http://192.168.0.13:3002/machines`;
    return this.http.patch<Machine>(`${url}/${_id}`, machine);
  }

  deleteMachine(_id: string) {
    const url = `http://192.168.0.13:3002/machines`;
    return this.http.delete(`${url}/${_id}`);
  }

}
