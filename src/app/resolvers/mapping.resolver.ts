import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { MappingApiService } from "../services/mapping-api.service";

export class MappingResolver implements Resolve<any>{
    constructor(
        private mappingApi: MappingApiService
    ){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.mappingApi.get()
    }
}