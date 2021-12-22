import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  constructor(private http: HttpClient) { }


  getCustomerAll() {
    const url = `http://localhost:3000/machines`;
    return this.http.get<Customer[]>(url);
  }
}
