import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";
import { CustomerComponent } from "./customer/customer.component";
import { MachineComponent } from "./machine/machine.component";
import { MasterRoutingModule } from "./master-routing.module";
import { MasterComponent } from "./master.component";
import { ShiftComponent } from "./shift/shift.component";
import { AddMachineComponent } from './machine/add-machine/add-machine.component';
import { AddShiftComponent } from "./shift/add-shift/add-shift.component";
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { RoleComponent } from './role/role.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { UserComponent } from './user/user.component';
=======
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { AddInstrumentComponent } from './instrument/add-instrument/add-instrument.component';
>>>>>>> d261dbbe9b995a711f7b5383dde1fff41e5ac640

@NgModule({
    declarations: [
        ShiftComponent,
        MachineComponent,
        CustomerComponent,
        AddShiftComponent,
        MasterComponent,
        AddMachineComponent,
        RoleComponent,
        AddCustomerComponent,
        InstrumentComponent,
<<<<<<< HEAD
        UserComponent
=======
        AddInstrumentComponent
>>>>>>> d261dbbe9b995a711f7b5383dde1fff41e5ac640
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
