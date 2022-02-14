<<<<<<< HEAD
// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
=======
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { MachineMappingApiService } from "../services/machinemapping-api.service";
>>>>>>> 168e3fc23d9937aa0d008fa4782d183a822586f6

// @Injectable({
//     providedIn: 'root'
// })
// export class MachineMappingResolver implements Resolve<any> {

<<<<<<< HEAD
//     constructor(
//         private machineMappingApi: 
//     ) { }
=======
    constructor(
        private machineMappingApi: MachineMappingApiService
    ) { }
>>>>>>> 168e3fc23d9937aa0d008fa4782d183a822586f6

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         return this.machineMappingApi.get()
//     }
// }