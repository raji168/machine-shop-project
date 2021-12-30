import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Shift } from '../models/shift.model';



@Injectable({
  providedIn: 'root'
})


export class ShiftApiService {

  constructor(private http: HttpClient) { }


  getShiftAll() {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.get<Shift[]>(url);
  }

  addShift(shift: Shift) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.post<{ _id: String }>(url, shift);
  }


  updateShift(shift: Partial<Shift>, id) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.patch<Shift>(`${url}/${id}`, shift);
  }

  deleteShift(_id: string) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.delete(`${url}/${_id}`);

  }

}



