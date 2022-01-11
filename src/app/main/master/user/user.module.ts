<<<<<<< HEAD:src/app/master/user/user.module.ts
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
        UserRoutinModule,
        FormsModule
    ]
})
=======
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
>>>>>>> 1d72636d8662bd65054bda8b77705be574cf4447:src/app/main/master/user/user.module.ts
export class UserModule { }