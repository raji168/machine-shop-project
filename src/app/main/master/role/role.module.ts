import { NgModule } from "@angular/core";
import { AddRoleComponent } from "./add-role/add-role.component";
import { RoleComponent } from "./role.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RoleRoutingModule } from "./role-routing.module";
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
    declarations: [
        RoleComponent,
        AddRoleComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RoleRoutingModule,
        MaterialModule
    ]
})

export class RoleModule { }