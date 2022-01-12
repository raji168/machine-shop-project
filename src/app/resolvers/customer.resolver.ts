import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CustomerApiService } from '../services/customer-api.service';


@Injectable({
  providedIn: 'root'
})

export class CustomerResolver implements Resolve<any> {

  constructor(private customer: CustomerApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.customer.getCustomerAll()

  }
}
