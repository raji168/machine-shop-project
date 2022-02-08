import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "./user.model";


@Injectable({
    providedIn:'root'
})

export class LoginUserService {

    constructor(private http:HttpClient){}

    getAll(){
        return this.http.get<User[]>(`${environment.apiUrl}/users`)
    }
}