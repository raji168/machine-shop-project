import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shift } from '../models/shift.model';


@Injectable({
  providedIn: 'root'
})
export class ShiftApiService {

  constructor(private http: HttpClient) { }


  getShiftAll() {
    const url = ` http://192.168.0.12:3002/shifts`;
    return this.http.get<Shift[]>(url);
  }

  addShift(shift: Shift) {
    const url = ` http://192.168.0.12:3002/shifts`;
    return this.http.post<{ shiftName: String }>(url, shift);
  }
  editShift(shift: Partial<Shift>, id: string | undefined) {
    const url = ` http://192.168.0.12:3002/shifts`;
    return this.http.patch<{ id: string }>(`${url}/${id}`, shift)
  }

  deleteShift(id: any) {
    const url = ` http://192.168.0.12:3002/shifts`;
    return this.http.delete<{ id: string }>(`${url}/${id}`);


  }
}
