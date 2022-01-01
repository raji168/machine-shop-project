import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Shift } from '../models/shift.model';
import { tap  } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class ShiftApiService {

  private reFresh = new Subject<void>();

  constructor(private http: HttpClient) { }
<<<<<<< HEAD


  refreshAll(){
    return this.reFresh;
  }


=======
  getreFreshAll(){
    return this.reFresh;
  }
>>>>>>> e26e5b1ab3c7eb58fc4d0177380bc821634a96c7
  getShiftAll() {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.get<Shift[]>(url);
  }

  addShift(shift: Shift) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.post<{ _id: String }>(url, shift)
    .pipe(
<<<<<<< HEAD
      tap(()=>{
        this.reFresh.next();
      })
    )
=======
      tap(() =>{
        this.reFresh.next();
      })
    );
>>>>>>> e26e5b1ab3c7eb58fc4d0177380bc821634a96c7
  }


  updateShift(shift: Partial<Shift>, id) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.patch<Shift>(`${url}/${id}`, shift)
    .pipe(
<<<<<<< HEAD
      tap(()=>{
        this.reFresh.next();
      })
    )
=======
      tap(() =>{
        this.reFresh.next();
      })
    );
>>>>>>> e26e5b1ab3c7eb58fc4d0177380bc821634a96c7
  }

  deleteShift(_id: string) {
    const url = ` http://192.168.0.13:3002/shifts`;
    return this.http.delete(`${url}/${_id}`)
    .pipe(
      tap(()=>{
        this.reFresh.next();
      })
    )
  }

}



