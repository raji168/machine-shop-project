import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserApiService } from "../services/user-api.service";

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

    constructor(
        private userApi: UserApiService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.userApi.get()
    }
}