import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Mapping } from "../models/mapping.model";

@Injectable({
        providedIn:'root'
})

export class MappingDataService{
    
    private mappings  : Mapping[] =[];

    mappigUpdated$= new BehaviorSubject<Mapping[]>([])

    getMapping(){
        return [...this.mappings]
    }

    loadMapping(mappings : Mapping[]){
        this.mappings = mappings;
        this.mappigUpdated$.next(this.mappings)
    }











}