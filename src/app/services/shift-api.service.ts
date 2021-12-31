import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
>>>>>>> 645f78bcd32aa1f3363c0e9c79058160a4d4cef9
import { Shift } from '../models/shift.model';
import {  Observable,Subject } from 'rxjs';
import { tap  } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class ShiftApiService {

  private reFresh = new Subject<void>();

  constructor(private http: HttpClient) { }
  private reFresh = new Subject<void>();
  getreFreshAll(){
    return this.reFresh;
  }
  getShiftAll() {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.get<Shift[]>(url);
  }

  addShift(shift: Shift) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.post<{ _id: String }>(url, shift)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }


  updateShift(shift: Partial<Shift>, id) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.patch<Shift>(`${url}/${id}`, shift)
    .pipe(
      tap(() =>{
        this.reFresh.next();
      })
    );
  }

  deleteShift(_id: string) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.delete(`${url}/${_id}`);

  }

}



