import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { InspectorViewDataService } from "src/app/data-services/dashboard/inspector-view.data.service";
import { InspectorView } from "src/app/models/dashboard/inspector-view.model";

@Injectable({
    providedIn:'root'
})


export class InspectorViewApiService {

    baseUrl:string = 'http://localhost:3000/inspectorviews';

    inspectors:InspectorView[] =[];

    constructor(
        private http:HttpClient,
        private inspectorDataService:InspectorViewDataService
    ){}

    get(){
        return this.http.get<InspectorView[]>(this.baseUrl);
    }

    getAll(){
        return this.http.get<InspectorView[]>(this.baseUrl)
        .pipe(
            tap((inspectors)=>{
                this.inspectorDataService.loadInspector(inspectors);
            })
        );
    }

}