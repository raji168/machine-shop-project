import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';

@NgModule({
    declarations: [
        ShiftComponent,
        MachineComponent,
        CustomerComponent,
        AddShiftComponent,
        MasterComponent,
        AddMachineComponent,
        RoleComponent,
        AddCustomerComponent
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
