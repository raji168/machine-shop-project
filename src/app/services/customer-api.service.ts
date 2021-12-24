import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  constructor(private http: HttpClient) { }


  getCustomerAll() {
    const url = `http://192.168.0.12:3002/customers`;
    return this.http.get<Customer[]>(url);
  }
}
