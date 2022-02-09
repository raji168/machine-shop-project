import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { managementDataService } from "../data-services/management-data.service";
import { Management } from "../models/management.model";

@Injectable({
    providedIn: 'root'
})


export class ManagementApiService {

    baseUrl: string = '/assets/stub/management.json';

    management: Management[] = [];

    constructor(private http: HttpClient,
        private managementDataService: managementDataService) { }


    get() {
        this.http.get<Management[]>(this.baseUrl)
            .pipe(
                tap((managements) => {
                    this.managementDataService.loadManagement(managements)
                })
            )
    }
}