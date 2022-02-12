import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  RoleState } from "src/app/store/reducers/role.reducers";


const roleState = createFeatureSelector<RoleState>('roleState');

export const selectRoles = createSelector(
    roleState,
    state => state.roles
);
export const areRolesLoaded = createSelector(
    roleState ,
    state => state.rolesLoaded
);
export const isRolesAdded = createSelector(
    roleState,
    state => state.roleAdded
);
export const selectLabError = createSelector(
    roleState,
    state =>state.roleAddedError
);

export const isLabAddedFailed = createSelector(
    roleState,
    state =>state.roleAddedFailed
);

export const selectEditlab = createSelector(
    roleState,
    state => state.editRole
);



