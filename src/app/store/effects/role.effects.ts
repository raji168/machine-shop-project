import { Injectable } from "@angular/core";
import { RoleApiService } from "src/app/services/role-api.service";
import { RoleActions } from "../actions/action-types";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class RoleEffects {

    addRole$ = createEffect(() => this.actions$.pipe(
        ofType(RoleActions.addRole),
        switchMap(action => this.roleApi.addRole(action.role).pipe(
            map(role => {
                this.toastr.success('Role Added Successfully', 'Success', { timeOut: 4000 });
                return RoleActions.roleAdded({ role });
            }),
            catchError(err => {
                this.toastr.error('Error while creating role, Please try again', 'Error', { timeOut: 4000 });
                return of(RoleActions.roleAddFail())
            })
        )),
    ), { useEffectsErrorHandler: false });

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
    ));

    updateRole$ = createEffect(() => this.actions$.pipe(
        ofType(RoleActions.updateRole),
        switchMap(action => this.roleApi.updateRole(action.role, action.id).pipe(
            map(role => {
                this.toastr.success('Role Updated Successfully', 'Success', { timeOut: 4000 });
                return RoleActions.roleUpdated({ role, loadedState: action.loadedState });
            }),
            catchError(err => {
                this.toastr.error('Error on Update Role , please try again ', 'Error', { timeOut: 4000 });
                return of(RoleActions.roleUpdateFail());
            })
        )),
    ));

    deleteRole$ = createEffect(() => this.actions$.pipe(
        ofType(RoleActions.deleteRoleSuccess),
        switchMap(action => this.roleApi.deleteRole(action.id).pipe(
            map(id => {
                this.toastr.success('Role Deleted Successfully', 'Success', { timeOut: 4000 });
                return RoleActions.deleteRoleSuccess({ id :action.id  });
            }),
            catchError(err => {
                this.toastr.error('Error on Update Role , please try again ', 'Error', { timeOut: 4000 });
                return of(RoleActions.deleteRoleFailure());
            })
        )),
    ));

    constructor(
        private actions$: Actions,
        private roleApi: RoleApiService,
        private toastr: ToastrService
    ) { }
}