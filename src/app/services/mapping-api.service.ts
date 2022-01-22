import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MappingDataService } from "../data-services/mapping-data.service";
import { Product } from "../models/mapping.model";
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class MappingApiService{

    URL : string = '/assets/stub/products.json';

    mappings : Product[] =[]

    constructor(
        private http : HttpClient,
        private mappingDataService : MappingDataService
    ){}

    get(): Observable<any>{
        return this.http.get<Product[]>(this.URL).pipe(
           tap((mappings) => {
               this.mappingDataService.loadMapping(mappings)
           })
        )
    }









}