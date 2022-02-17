import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { MachineCategoryApiService } from "../services/machinecategory-api.service";

@Injectable({
    providedIn: 'root'
})
export class MachineCategoryResolver implements Resolve<any> {

    constructor(
        private machineCategoryApi: MachineCategoryApiService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.machineCategoryApi.get()
    }
}