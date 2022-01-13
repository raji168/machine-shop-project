import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MappingDataService } from "../data-services/mapping-data.service";
import { Mapping } from "../models/mapping.model";
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class MappingApiService{

    URL : string = 'http://192.168.0.17:3002/products';

    mappings : Mapping[] =[]

    constructor(
        private http : HttpClient,
        private mappingDataService : MappingDataService
    ){}

    get(): Observable<any>{
        return this.http.get<Mapping[]>(this.URL).pipe(
           tap((mappings) => {
               this.mappingDataService.loadMapping(mappings)
           })
        )
    }









}