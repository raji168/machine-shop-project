import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ManagementViewDataService } from "src/app/data-services/dashboard/management-view.data.service";
import { ManagementView } from "../../models/dashboard/management.-view.model"


@Injectable({
    providedIn: 'root'
})


export class ManagementViewApiService {

    baseUrl: string = 'http://localhost:3000/managements';

    managements: ManagementView[] = [];

    constructor(
        private http: HttpClient,
        private managementDataService: ManagementViewDataService) { }


    getAll():Observable<any> {
        return this.http.get<ManagementView[]>(this.baseUrl)
            .pipe(
                tap((managements) => {
                    this.managementDataService.loadManagement(managements);
                })
            );
    }

    get(){
        return this.http.get<ManagementView[]>(this.baseUrl);
    }
}