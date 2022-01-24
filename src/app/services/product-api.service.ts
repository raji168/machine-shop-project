import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductDataService } from "../data-services/product-data.service";
import { Product } from "../models/product.model";
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ProductApiService{

    URL : string = '/assets/stub/products.json';

    mappings : Product[] =[]

    constructor(
        private http : HttpClient,
        private mappingDataService : ProductDataService
    ){}

    get(): Observable<any>{
        return this.http.get<Product[]>(this.URL).pipe(
           tap((mappings) => {
               this.mappingDataService.loadMapping(mappings)
           })
        )
    }









}