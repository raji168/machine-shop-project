import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserRoutinModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

@NgModule({
    declarations: [
        UserComponent,
        AddUserComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        UserRoutinModule
    ]
})
export class UserModule { }