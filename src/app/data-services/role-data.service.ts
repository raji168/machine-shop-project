import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Role } from "../models/role.model";


@Injectable({
    providedIn: 'root'
})
export class RoleDataService {

    private roles: Role[] = []

    roleUpdated$ = new Subject<Role[]>()

    getRoles() {
        return [...this.roles] // copy
    }

    loadRoles(roles: Role[]) {
        this.roles = roles;
    }

    addRole(role: Role) {
        this.roles = [...this.roles, role]
        this.roleUpdated$.next(this.roles);
    }

    updateRole(roleResponse: Role) {
        const updateRole = this.roles.find(role => role._id === role._id)
        const updateRoleIndex = this.roles.findIndex(role => role._id === role._id)
        const updatedRole = {...updateRole, ...roleResponse}
        this.roles[updateRoleIndex] = updatedRole
        this.roleUpdated$.next(this.roles);
    }

}