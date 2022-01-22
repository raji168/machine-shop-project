import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/mapping.model";

@Injectable({
        providedIn:'root'
})

export class MappingDataService{
    
    private mappings  : Product[] =[];

    mappingUpdated$= new BehaviorSubject<Product[]>([])

    getMapping(){
        return [...this.mappings]
    }

    loadMapping(mappings : Product[]){
        this.mappings = mappings;
        this.mappingUpdated$.next(this.mappings)
    }











}