import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  constructor(private http: HttpClient) { }


  getCustomerAll() {
    const url = `http://192.168.0.13:3002/customers`;
    return this.http.get<Customer[]>(url);
  }

  addCustomer(client: Customer) {
    const url = ` http://192.168.0.13:3002/customers`;
    return this.http.post<{ _id: String }>(url, client);
  }

  updateCustomer(client: Partial<Customer>, _id: string) {
    const url = ` http://192.168.0.13:3002/customers`;
    return this.http.patch<Customer>(`${url}/${_id}`, client);
  }

  deleteCustomer(_id: string) {
    const url = `http://192.168.0.13:3002/customers`;
    return this.http.delete(`${url}/${_id}`);

  }
}
