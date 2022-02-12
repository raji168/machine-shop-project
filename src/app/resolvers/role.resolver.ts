import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { filter, finalize, first, tap } from "rxjs/operators";
import { RoleApiService } from "../services/role-api.service";
import { RoleActions } from "../store/actions/action-types";
import { RoleLoaded } from "../store/actions/role.actions";
import { areRolesLoaded } from "../store/selectors/role.selectors";

@Injectable({
    providedIn: 'root'
})
export class RoleResolver implements Resolve<any> {

    loading = false;
    
    constructor(
        private store: Store
    ) {}
    resolve(){
        return this.store.select(areRolesLoaded).pipe(
            tap(loaded => {
                if(!loaded && !this.loading) {
                    this.store.dispatch(RoleActions.loadRoles());
                    this.loading = true;
                }
            }),
            filter(loaded => !!loaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
    
}