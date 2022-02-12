import { createAction, props } from "@ngrx/store";
import { Role } from "src/app/models/role.model";

export const addRole = createAction(
    '[Role Component] Add Role',
    props<{ role: Role }>()
)
export const roleAdded = createAction(
    '[Role Component] Role Added',
    props<{ role: Role }>()
)
export const loadRoles = createAction(
    '[Role Component] Load Roles' ,

);
export const RoleLoaded = createAction(
    '[Role Component] Role Loaded',
    props<{ roles: Role[] }>()
);
export const updateRole = createAction(
    '[Role Component] Update Role',
    props<{ role: Partial<Role>, id: string; loadedState: boolean }>()
);
export const roleUpdated = createAction(
    '[Role Component] Role Updated',
    props<{ role: Role, loadedState: boolean }>()
);
export const resetRoleAdded = createAction(
    '[Role Component] Reset Role Added'
);

export const resetRoleAddedFailed = createAction(
    '[Role Component] Reset Role Added Failed'
);

export const roleAddFail = createAction(
    '[Role Component] Role Added Failed'
)
export const editRole = createAction(
    '[Role Component] Edit Role ',
    props<{ role: Role }>()
);
export const clearEditRole = createAction(
    '[Role Component] Clear Edit Role',
);

export const roleError = createAction(
    '[Role Component] Role Error'
);



