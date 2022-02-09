import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { DashBoardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ManagementComponent } from './management/management.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ManagementComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        DashBoardRoutingModule,
        FormsModule
    ]
})

export class DashboardModule {

}