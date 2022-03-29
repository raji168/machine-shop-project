
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { MachineMappingApiService } from "../services/machinemapping-api.service";

@Injectable({
    providedIn: 'root'
})
export class MachineMappingResolver implements Resolve<any> {
    constructor(
        private machineMappingApi: MachineMappingApiService
    ) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.machineMappingApi.get()
    }
}