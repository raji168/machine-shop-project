import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { CustomerViewDataService } from "src/app/data-services/dashboard/customer-view.data.service";
import { CustomerView } from "../../models/dashboard/customer-view.model";

@Injectable({
    providedIn:'root'
})

export class CustomerViewApiService {

    baseUrl:string ='http://localhost:3000/customerviews';

    customers:CustomerView[] = [] ;

    constructor(
        private http:HttpClient,
        private customerDataService:CustomerViewDataService
        ){}

    get(){
        return this.http.get<CustomerView[]>(this.baseUrl);
    }

    getAll():Observable<any>{
        return this.http.get<CustomerView[]>(this.baseUrl)
        .pipe(
            tap((customers)=>{
                this.customerDataService.loadCustomer(customers);
            })
        );
        
    }

    
}