import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../models/customer.model';
import { tap } from 'rxjs/operators';
import { CustomerDataService } from '../data-services/customer-data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  baseUrl: string = `http://192.168.0.13:3002/customers`;

  customers: Customer[] = [];

  customerUpdated = new Subject();

  constructor(
    private http: HttpClient,
    private customerDataService: CustomerDataService
  ) { }


  getCustomerAll() {

    return this.http.get<Customer[]>(this.baseUrl)
      .pipe(
        tap((customers) => {
          this.customerDataService.loadCustomer(customers)
        })
      );

  }


  addCustomer(customer: Customer) {

    return this.http.post<Customer>(this.baseUrl, customer)
      .pipe(
        tap((customer) => {
          this.customerDataService.addCustomer(customer)
        })
      );
  }

  updateCustomer(customer: Partial<Customer>, _id: string) {

    return this.http.patch<Customer>(`${this.baseUrl}/${_id}`, customer)
      .pipe(
        tap((customer) => {
          this.customerDataService.updateCustomer(customer)
        })
      );
  }

  deleteCustomer(_id: string) {

    return this.http.delete<Customer>(`${this.baseUrl}/${_id}`)
    .pipe(
      tap(customer =>{
        this.customerDataService.deleteCustomer(customer._id)
      })
    );
  }
}
