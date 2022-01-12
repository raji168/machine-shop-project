import { ActivatedRouteSnapshot,Resolve,RouterStateSnapshot  } from "@angular/router";
import { InstrumentService } from "../services/instrument.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class InstrumentResolver implements Resolve<any>{

    constructor(
        private instrumentApi : InstrumentService
    ) {  }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.instrumentApi.get()
    }
}