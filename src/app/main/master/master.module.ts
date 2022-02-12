import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material/material.module";
import { MasterRoutingModule } from "./master-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MasterComponent } from "./master.component";
import { RoleComponent } from './role/role.component';
import { AddRoleComponent } from "./role/add-role/add-role.component";
import { CustomerComponent } from "./customer/customer.component";
import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { InstrumentComponent } from "./instrument/instrument.component";
import { AddInstrumentComponent } from "./instrument/add-instrument/add-instrument.component";
import { MachineComponent } from "./machine/machine.component";
import { AddMachineComponent } from "./machine/add-machine/add-machine.component";
import { ShiftComponent } from "./shift/shift.component";
import { AddShiftComponent } from "./shift/add-shift/add-shift.component";
import { UserComponent } from "./user/user.component";
import { AddUserComponent } from "./user/add-user/add-user.component";
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";


@NgModule({
    declarations: [
        MasterComponent,
        RoleComponent,
        AddRoleComponent,
        CustomerComponent,
        AddCustomerComponent,
        InstrumentComponent,
        AddInstrumentComponent,
        MachineComponent,
        AddMachineComponent,
        ShiftComponent,
        AddShiftComponent,
        UserComponent,
        AddUserComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MasterRoutingModule,
        FormsModule,
        [NgxMatTimepickerModule.setLocale('en-IN')]
    ],
})


export class MasterModule {
}
