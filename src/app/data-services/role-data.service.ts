import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Role } from "../models/role.model";


@Injectable({
    providedIn: 'root'
})
export class RoleDataService {

    private roles: Role[] = [];

    roleUpdated$ = new BehaviorSubject<Role[]>([])

    getRoles() {
        return [...this.roles] // copy
    }

    loadRoles(roles: Role[]) {
        this.roles = roles;
        this.roleUpdated$.next(this.roles)
    }

    addRole(role: Role) {
        this.roles = [...this.roles, role]
        this.roleUpdated$.next(this.roles);
    }

    updateRole(roleResponse: Role) {
        const updateRole = this.roles.find(role => role._id === roleResponse._id)
        const updateRoleIndex = this.roles.findIndex(role => role._id === roleResponse._id)
        const updatedRole = { ...updateRole, ...roleResponse }
        this.roles[updateRoleIndex] = updatedRole
        // console.log(this.roles)
        this.roleUpdated$.next(this.roles);
    }

    deleteRole(id: string) {
        this.roles = this.roles.filter(role => role._id !== id);
        this.roleUpdated$.next(this.roles);
    }

}