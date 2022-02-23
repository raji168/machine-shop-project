import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Role } from "src/app/models/role.model";

//add
export const addRole = createAction(
    '[Role Component] Add Role',
    props<{ role: Partial<Role> }>()
);
export const roleAdded = createAction(
    '[Role Component] Role Added',
    props<{ role: Role }>()
);

//load
export const loadRoles = createAction(
    '[Role Component] Load Roles' ,
);
export const RoleLoaded = createAction(
    '[Role Component] Role Loaded',
    props<{ roles: Role[] }>()
);

//update
export const updateRole = createAction(
    '[Role Component] Update Role',
    props<{ role: Partial<Role> , id: string , loadedState: boolean }>()
);
export const roleUpdated = createAction(
    '[Role Component] Role Updated',
    props<{ update: Update<Role> , loadedState: boolean }>()
);

//delete 
export const deleteRole = createAction(
    "[Role Component]  Delete  Role",
    props<{ id: string }>()
);
export const roleDeleted = createAction(
    "[Role Component] Role Deleted",
    props<{ id: string }>()
);

//Error
export const roleAddFail = createAction(
    '[Role Component] Role Added Failed'
);
export const roleUpdateFail =createAction(
    '[Role Component] Role Update Failed'
);
export const roleError = createAction(
    '[Role Component] Role  Loaded Error'
);
export const deleteRoleFailure = createAction(
    "[Role Component] Role Deletes Failure",
);


