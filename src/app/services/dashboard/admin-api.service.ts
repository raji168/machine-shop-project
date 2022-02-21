import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admin} from "../../models/dashboard/admin.model"


@Injectable({
    providedIn: 'root'
})


export class AdminApiService {

     URL : string = '/assets/stub/admin.json';

    constructor(
        private http: HttpClient,
) { }


    get(){
        return this.http.get<Admin[]>(this.URL);
    }
}