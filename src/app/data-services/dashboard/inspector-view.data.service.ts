import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { InspectorView } from "src/app/models/dashboard/inspector-view.model";

@Injectable({
    providedIn:'root'
})


export class InspectorViewDataService {

    private inspectors:InspectorView[]=[];

    inspectorUpdate$ = new BehaviorSubject<InspectorView[]>([])

    getInspector(){

        return [...this.inspectors];
    }

    loadInspector(inspectors:InspectorView[]){

        this.inspectors = inspectors;
        this.inspectorUpdate$.next(this.inspectors);
    }

    addInspector(inspector:InspectorView){
        
        this.inspectors = [...this.inspectors,inspector];
        this.inspectorUpdate$.next(this.inspectors);
    }
}