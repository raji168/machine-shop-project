import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddInstrumentComponent } from './instrument/add-instrument/add-instrument.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog/confirm-dialog.component';


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
        UserComponent,
        AddUserComponent,
        AddInstrumentComponent,
        AddRoleComponent,
        EditRoleComponent,
        ConfirmDialogComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        MasterRoutingModule,
        MatButtonModule,
        [NgxMatTimepickerModule.setLocale('en-IN')]

    ],
    providers: []
})


export class MasterModule {
}
