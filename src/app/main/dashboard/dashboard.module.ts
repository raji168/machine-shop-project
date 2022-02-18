import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { DashBoardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ManagementComponent } from './management/management.component';
import { ManagerComponent } from './manager/manager.component';
import { NpdTeamComponent } from './npd-team/npd-team.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { InspectorComponent } from './inspector/inspector.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
    declarations: [
        DashboardComponent,
        ManagementComponent,
        ManagerComponent,
        NpdTeamComponent,
        SupervisorComponent,
        InspectorComponent,
        CustomerViewComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        DashBoardRoutingModule,
        DragDropModule,
        FlexLayoutModule,
        FormsModule
    ]
})

export class DashboardModule {

}