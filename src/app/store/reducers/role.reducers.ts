import { createReducer, on } from "@ngrx/store";
import { Role } from "src/app/models/role.model";
import { RoleActions } from "src/app/store/actions/action-types"
import { EntityState, createEntityAdapter } from "@ngrx/entity";

export interface RoleState extends EntityState<Role> {
    rolesLoaded: boolean;
    roleAdded: boolean;
}
export const adapter = createEntityAdapter<Role>({
    selectId: role => role._id
});

export const initialState: RoleState = adapter.getInitialState({
    entities: {},
    ids: [],
    roleAdded: false,
    rolesLoaded: false

});

export const reducer = createReducer(
    initialState,
    on(RoleActions.roleAdded, (state, action) =>adapter.addOne(action.role,{
        ...state,
        roleAdded: true
    })),

    on(RoleActions.RoleLoaded, (state, action) => adapter.setAll(action.roles, {
        ...state,
        rolesLoaded: true
    })),
    
    on(RoleActions.roleUpdated, (state, action) => adapter.updateOne(action.update,{
        ...state,
        roleAdded: action.loadedState
    })),

    on(RoleActions.roleDeleted, (state, action) =>
        adapter.removeOne(action.id, state)
    )
);

export const { selectAll } = adapter.getSelectors();

export function roleReducer(state, action) {
    return reducer(state, action);
}

