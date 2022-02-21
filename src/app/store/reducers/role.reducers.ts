import { state } from "@angular/animations";
import { identifierModuleUrl } from "@angular/compiler";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Role } from "src/app/models/role.model";
import { RoleActions } from "src/app/store/actions/action-types"
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
export interface RoleState extends EntityState<Role> {
   
    roles: Role[];
    rolesLoaded: boolean;
    roleAdded: boolean;
    roleAddedError: boolean;
    roleAddedFailed: boolean;
    editRole: any;
}
export const adapter :EntityAdapter<Role> = createEntityAdapter<Role>();

export const initialState: RoleState = adapter.getInitialState( {
    roles : [],
    roleAdded: false,
    rolesLoaded: false,
    roleAddedError: false,
    roleAddedFailed: false,
    editRole: null
});

export const reducer = createReducer(
    initialState,
    on(RoleActions.roleAdded, (state, action) =>
    // adapter.addOne(action.role,state)
    {
        return {
            ...state,
            roles: [...state.roles, action.role],
            roleAdded: true
        };
    }
    ),
    on(RoleActions.roleAddFail, (state, action) => {
        return {
            ...state,
            roleAddedFailed: true
        };
    }),

    on(RoleActions.RoleLoaded, (state, action) => 
    // adapter.setAll(action.roles,state)
    {
        return {
            ...state,
            roles: action.roles,
            rolesLoaded: true
        };
    }
    ),
    on(RoleActions.roleUpdated, (state, action) => 
    // adapter.updateOne(action.loadedState,state)
    {
        const clonedRoles = [...state.roles];
        const updateRoleIndex = clonedRoles.findIndex(role => role._id === action.role._id);
        const updateRole = clonedRoles.find(role => role._id === action.role._id);
        const updatedRole = { ...updateRole, ...action.role };
        clonedRoles[updateRoleIndex] = updatedRole;
        return {
            ...state,
            roles: clonedRoles,
            roleAdded: action.loadedState
        };
    }
    ),
    // on(RoleActions.roleDeleted, (state , action) => {
    //     const updatedRole = state.roles.filter(role => role._id ! == action.id);
    //     return{
    //         ...state,
    //         roles :updatedRole,
    //     }
    // }),
        on(RoleActions.deleteRoleSuccess, (state, action) =>
        adapter.removeOne(action.id, state)
      ),
      on(RoleActions.deleteRoleFailure, (state, action) => {
        return {
          ...state,
          error: action.error
        };
      }),
    on(RoleActions.resetRoleAdded, (state, action) => {
        return {
            ...state,
            roleAdded: false
        };
    }),

    on(RoleActions.resetRoleAddedFailed, (state, action) => {
        return {
            ...state,
            roleAddedFailed: false
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

