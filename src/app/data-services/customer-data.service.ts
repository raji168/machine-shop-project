import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Customer } from "../models/customer.model";

@Injectable({
    providedIn: 'root'
})


export class CustomerDataService {

    private customers: Customer[] = [];

    customerUpdated$ = new Subject<Customer[]>()

    getCustomer() {

        return [...this.customers]

    }

    loadCustomer(customers: Customer[]) {

        this.customers = customers;

    }

    addCustomer(customer: Customer) {

        this.customers = [...this.customers, customer]
        this.customerUpdated$.next(this.customers);

    }

    updateCustomer(customerResponse: Customer) {

        const updateCustomer = this.customers.find(customer => customer._id === customer._id)
        const updateCustomerIndex = this.customers.findIndex(customer => customer._id === customer._id)
        const updatedCustomer = { ...updateCustomer, ...customerResponse }
        this.customers[updateCustomerIndex] = updatedCustomer
        this.customerUpdated$.next(this.customers);
    }
}
