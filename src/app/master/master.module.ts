import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { CustomerComponent } from "./customer/customer.component";
import { MachineComponent } from "./machine/machine.component";
import { MasterRoutingModule } from "./master-routing.module";
import { MasterComponent } from "./master.component";
import { ShiftComponent } from "./shift/shift.component";
import { AddMachineComponent } from './machine/add-machine/add-machine.component';
import { AddShiftComponent } from "./shift/add-shift/add-shift.component";
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { RoleComponent } from './role/role.component';

@NgModule({
    declarations: [
        ShiftComponent,
        MachineComponent,
        CustomerComponent,
        AddShiftComponent,
        MasterComponent,
        AddMachineComponent,
        RoleComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        MasterRoutingModule,
        [NgxMatTimepickerModule.setLocale('en-IN')]

    ],
    providers: []
})


export class MasterModule {
}
