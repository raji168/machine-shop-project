import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Customer } from "../models/customer.model";

@Injectable({
    providedIn: 'root'
})


export class CustomerDataService {

    private customers: Customer[] = [];

    customerUpdated$ = new BehaviorSubject<Customer[]>([])

    getCustomer() {

        return [...this.customers]

    }

    loadCustomer(customers: Customer[]) {

        this.customers = customers;
        this.customerUpdated$.next(this.customers);

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

    deleteCustomer(id:string){

        this.customers = this.customers.filter(item => item._id !== id)
        this.customerUpdated$.next(this.customers);
        
    }
}
