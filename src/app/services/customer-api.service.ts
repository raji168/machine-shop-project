import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer.model';
import { tap } from 'rxjs/operators';
import { CustomerDataService } from '../data-services/customer-data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
 

  baseUrl: string = `http://192.168.0.17:3002/customers`;

  customers: Customer[] = [];

  constructor(
    private http: HttpClient,
    private customerDataService: CustomerDataService
  ) { }


  getCustomerAll():Observable<any> {

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

  updateCustomer(customer: Partial<Customer>, id) {

    return this.http.patch<Customer>(`${this.baseUrl}/${id}`, customer)
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
  
  deleteSelectCustomer(customers :Customer[]): Observable<Customer[]>{
    return forkJoin(customers.map(customer => this.http.delete<Customer>(`${this.baseUrl}/${customer._id}`)))
  }

}
