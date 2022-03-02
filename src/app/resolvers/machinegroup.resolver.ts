import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { MachineGroupApiService } from "../services/machinegroup-api.service";

@Injectable({
    providedIn: 'root'
})
export class MachineGropuResolver implements Resolve<any> {
    constructor(
        private machineGroupApi: MachineGroupApiService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.machineGroupApi.get()
    }
}