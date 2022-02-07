import { createReducer, on } from "@ngrx/store";
import { Role } from "src/app/models/role.model";
import { RoleActions } from "src/app/store/actions/action-types"

export interface RoleState {
   
    roles: Role[];
    rolesLoaded: boolean;
    roleAdded: boolean;
    roleAddedError: boolean;
    roleAddedFailed: boolean;
}

const initialState: RoleState = {
    roles : [],
    roleAdded: false,
    rolesLoaded: false,
    roleAddedError: false,
    roleAddedFailed: false,
}

export const reducer = createReducer(
    initialState,
    on(RoleActions.roleAdded, (state, action) => {
        return {
            ...state,
            roles: [...state.roles, action.role],
            roleAdded: true
        };
    }),

    on(RoleActions.RoleLoaded, (state, action) => {
        return {
            ...state,
            roles: action.role,
                RoleLoaded: true
        };
    }),
    on(RoleActions.roleUpdated, (state, action) => {
        const clonedRoles = [...state.roles];
        const updateRoleIndex = clonedRoles.findIndex(l => l._id === action.role._id);
        const updateRole = clonedRoles.find(l => l._id === action.role._id);

        const updatedRole = { ...updateRole, ...action.role };

        clonedRoles[updateRoleIndex] = updatedRole;

        return {
            ...state,
            roles: clonedRoles,
            roleAdded: action.loadedState
        };
    }),
    on(RoleActions.resetRoleAdded, (state, action) => {
        return {
            ...state,
            roleAdded: false
        };
    }),

    on(RoleActions.resetRoleAddedFailed, (state, Action) => {
        return {
            ...state,
            roleAddedFailed: false
        };
    }),

    on(RoleActions.roleAddFail, (state, action) => {
        return {
            ...state,
            roleAddedFailed: true
        };
    }),

    on(RoleActions.editRole, (state, action) => {
        return {
            ...state,
            editLab: action.role
        };
    }),

    on(RoleActions.clearEditRole, (state, action) => {
        return {
            ...state,
            editRole: null
        };
    }),
);

export function roleReducer( state, action) {
    return reducer(state, action);
}

