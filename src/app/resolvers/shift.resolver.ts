import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ShiftApiService } from '../services/shift-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftResolver implements Resolve<any> {

  constructor(private shift: ShiftApiService) { }

  resolve() {
    return this.shift.getShiftAll()
  }
}
