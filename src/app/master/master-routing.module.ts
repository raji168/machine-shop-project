import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { InstrumentComponent } from "./instrument/instrument.component";
import { MachineComponent } from "./machine/machine.component";
import { RoleComponent } from "./role/role.component";
import { ShiftComponent } from "./shift/shift.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    { path: 'shift', component: ShiftComponent } ,
    { path: 'machine', component: MachineComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'role', component: RoleComponent },
    { path: 'instrument', component: InstrumentComponent },
    { path: 'user', component: UserComponent }

]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class MasterRoutingModule {

}