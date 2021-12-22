import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineApiService {

  constructor(private http: HttpClient) { }

  getMachineAll() {
    const url = `http://192.168.0.12:3002/machines`;
    return this.http.get<Machine[]>(url);
  }

  addMachine(machine: Machine) {
    const url = `http://192.168.0.12:3002/machines`;
    return this.http.post<{ machinename: String }>(url, machine);

  }
}
