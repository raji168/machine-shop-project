import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class DashboardResolver implements Resolve<any> {

  constructor() {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true
  }
}
