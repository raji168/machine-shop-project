import { Injectable } from "@angular/core";
import { RoleApiService } from "src/app/services/role-api.service";
import { RoleActions } from "../actions/action-types";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from "rxjs";
import { ToastrModule } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class RoleEffects  {

    // addRole$ = createEffect(() => this.actions$.pipe(
    //     ofType(RoleActions.addRole),
    //     switchMap(action => this.roleApi.add(action.role).pipe(
    //         map(role => {
    //             // this.toastr.success('Role Added Successfully', 'Success', { timeOut: 4000 });
    //             return RoleActions.roleAdded({roles});
    //         }),
    //         catchError(error => {
    //             // this.toastr.error('Error while creating role, Please try again', 'Error', { timeOut: 4000 });
    //             return of(RoleActions.roleError())
    //         })
    //     )), 
    // );
    // addRoles$ = createEffect(() => this.actions$.pipe(
    //     ofType(RoleActions.addRole),
    //     switchMap(action => this.roleApi.add()
    //         .pipe(
    //             map(roles => {
    //                 return RoleActions.roleAdded({roles});
    //             }),
    //             catchError(error => {
    //                 return of(RoleActions.roleError())
    //             })
    //         )),
    //     )
    // );

    loadRoles$ = createEffect(() => this.actions$.pipe(
        ofType(RoleActions.loadRoles),
        switchMap(action => this.roleApi.get()
            .pipe(
            map(roles => {
                return RoleActions.RoleLoaded({ roles });
            }),
            catchError(error => {
                return of(RoleActions.roleError())
            })
            )),
        )
    );


    
    constructor(
        private actions$: Actions,
        private roleApi: RoleApiService
    ) {}
            
}