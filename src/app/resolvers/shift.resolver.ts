import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ShiftApiService } from '../services/shift-api.service';

@Injectable({
  providedIn: 'root'
})

export class ShiftResolver implements Resolve<any> {

  constructor(private shift: ShiftApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.shift.getShiftAll()

  }
}
