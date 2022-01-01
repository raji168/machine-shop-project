import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../models/customer.model';
import { tap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  private reFresh = new Subject<void>();

  constructor(private http: HttpClient) { }

  refreshAll(){
    return this.reFresh;
  }

  getCustomerAll() {
    const url = `http://192.168.0.13:3002/customers`;
    return this.http.get<Customer[]>(url);
  }

  addCustomer(client: Customer) {
    const url = ` http://192.168.0.13:3002/customers`;
    return this.http.post<{ _id: String }>(url, client)
    .pipe(
      tap(()=>{
        this.reFresh.next();
      })
    )
  }

  updateCustomer(client: Partial<Customer>, _id: string) {
    const url = ` http://192.168.0.13:3002/customers`;
    return this.http.patch<Customer>(`${url}/${_id}`, client)
    .pipe(
      tap(()=>{
        this.reFresh.next();
      })
    )
  }

  deleteCustomer(_id: string) {
    const url = `http://192.168.0.13:3002/customers`;
    return this.http.delete(`${url}/${_id}`)
    .pipe(
      tap(()=>{
        this.reFresh.next();
      })
    )
  }
}
