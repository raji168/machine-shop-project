import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { Shift } from '../models/shift.model';

import { tap } from 'rxjs/operators';
import { ShiftDataService } from '../data-services/shift-data.service';



@Injectable({
  providedIn: 'root'
})


export class ShiftApiService {

  baseUrl: string = ` http://192.168.0.17:3002/shifts`;

  shifts: Shift[] = [];


  constructor(
    private http: HttpClient,
    private shiftDataService: ShiftDataService
  ) { }

  getShiftAll():Observable<any> {

    return this.http.get<Shift[]>(this.baseUrl).pipe(
      tap((shifts) => {
        this.shiftDataService.loadShift(shifts)
      })
    );
  }

  addShift(shift: Shift) {

    return this.http.post<Shift>(this.baseUrl, shift)
      .pipe(
        tap((shift) => {
          this.shiftDataService.addShift(shift)
        })
      );
  }


  updateShift(shift: Partial<Shift>, id) {

    return this.http.patch<Shift>(`${this.baseUrl}/${id}`, shift)
      .pipe(
        tap((shift) => {
          this.shiftDataService.updateShift(shift)
        })
      );
  }

  deleteShift(_id: string) {

    return this.http.delete<Shift>(`${this.baseUrl}/${_id}`).pipe(
      tap(shift=>{
        this.shiftDataService.deleteShift(shift._id);
      })
    );
  }
  
   deleteSelectShift(shifts :Shift[]): Observable<Shift[]>{
    return forkJoin(shifts.map(shift => this.http.delete<Shift>(`${this.baseUrl}/${shift._id}`)))
   }

  //  deleteSelectShift(shifts:Shift[]){
  //   return forkJoin(shifts.map(shift => this.http.delete<Shift>(`${this.baseUrl}/${shift._id}`))).pipe(
  //     tap(shifts =>{
  //       this.shiftDataService.deleteSelectShift(shifts);
  //     })
  //   )

  //  }

}
 
   


