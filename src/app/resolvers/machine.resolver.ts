import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { MachineApiService } from '../services/machine-api.service';

@Injectable({
  providedIn: 'root'
})

export class MachineResolver implements Resolve<any> {

  constructor(private machine: MachineApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.machine.getMachineAll()

  }
}
