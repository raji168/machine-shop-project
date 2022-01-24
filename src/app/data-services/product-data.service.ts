import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
        providedIn:'root'
})

export class ProductDataService{
    
    private mappings  : Product[] =[];

    mappingUpdated$= new BehaviorSubject<Product[]>([])

    getMapping(){
        return [...this.mappings]
    }

    loadMapping(mappings : Product[]){
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