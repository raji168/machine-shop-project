import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Management } from "../models/management.model";

@Injectable({
    providedIn:'root'
})

export class managementDataService {

    private managements: Management[] =[] ;

    managementUpdated$ = new BehaviorSubject<Management[]>([])


    getManagement(){
        
        return [...this.managements]
    }

    loadManagement(managements:Management[]){

        this.managements = managements ;
        this.managementUpdated$.next(this.managements);
    }
}