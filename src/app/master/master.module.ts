import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from "../material/material.module";
import { MasterRoutingModule } from "./master-routing.module";
import { MasterComponent } from "./master.component";
import { RoleComponent } from './role/role.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InstrumentComponent } from './instrument/instrument.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddInstrumentComponent } from './instrument/add-instrument/add-instrument.component';
import { AddRoleComponent } from './role/add-role/add-role.component';

import { ShiftRoutingModule } from "./shift/shift-routing.module";
import { MachineRoutingModule } from "./machine/machine-routing.module";
import { CustomerRoutingModule } from "./customer/customer-routing.module";




@NgModule({
    declarations: [

        MasterComponent,
        RoleComponent,
        InstrumentComponent,
        UserComponent,
        AddUserComponent,
        AddInstrumentComponent,
        AddRoleComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MasterRoutingModule,
        MatButtonModule
        
    ],
})


export class MasterModule {
}
