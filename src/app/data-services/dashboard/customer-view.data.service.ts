import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CustomerView } from "../../models/dashboard/customer-view.model";

@Injectable({
    providedIn:'root'
})


export class CustomerViewDataService {

    private customers:CustomerView[]=[];

    customerUpdate$ = new BehaviorSubject<CustomerView[]>([])

    getCustomer(){

        return [...this.customers]
    }

    loadCustomer(customers:CustomerView[]){

        this.customers = customers;
        this.customerUpdate$.next(this.customers);
    }

    addCustomer(customer:CustomerView){

        this.customers = [...this.customers,customer];
        this.customerUpdate$.next(this.customers);
    }
}