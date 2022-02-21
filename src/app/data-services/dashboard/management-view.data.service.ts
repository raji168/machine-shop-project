import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ManagementView } from "src/app/models/dashboard/admin.model";

@Injectable({
    providedIn:'root'
})

export class ManagementViewDataService {

    private managements: ManagementView[] =[] ;

    managementUpdated$ = new BehaviorSubject<ManagementView[]>([])


    getManagement(){
        
        return [...this.managements]
    }

    loadManagement(managements:ManagementView[]){

        this.managements = managements ;
        this.managementUpdated$.next(this.managements);
    }

    addManagement(management: ManagementView) {

        this.managements = [...this.managements, management]
        this.managementUpdated$.next(this.managements);

    }
}