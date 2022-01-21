import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Mapping } from "../models/mapping.model";

@Injectable({
        providedIn:'root'
})

export class MappingDataService{
    
    private mappings  : Mapping[] =[];

    mappingUpdated$= new BehaviorSubject<Mapping[]>([])

    getMapping(){
        return [...this.mappings]
    }

    loadMapping(mappings : Mapping[]){
        this.mappings = mappings;
        this.mappingUpdated$.next(this.mappings)
    }
    // addMapping(mapping :Mapping){
    //     this.mappings = [...this.mappings,mapping]
    //     this.mappingUpdated$.next(this.mappings)
    // }
    // updatedMapping(mappingResponse : Mapping){
    //     const updateMapping = this.mappings.find(mapping => mapping._id === mappingResponse._id)
    //     const updateMappingIndex =this.mappings.findIndex(mapping => mapping._id == mappingResponse._id )
    //     const updatedMapping = { ...updateMapping, ...mappingResponse}
    //     this.mappings[updateMappingIndex] = updatedMapping
    //     this.mappingUpdated$.next(this.mappings);
    // }










}