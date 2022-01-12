import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RoleApiService } from "../services/role-api.service";

@Injectable({
    providedIn: 'root'
})
export class RoleResolver implements Resolve<any> {

    constructor(
        private roleApi: RoleApiService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.roleApi.get()
    }
}