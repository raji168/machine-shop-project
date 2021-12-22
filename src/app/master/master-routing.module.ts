import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { MachineComponent } from "./machine/machine.component";
import { RoleComponent } from "./role/role.component";
import { ShiftComponent } from "./shift/shift.component";

const routes: Routes = [
    { path: 'shift', component: ShiftComponent },
    { path: 'machine', component: MachineComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'role', component: RoleComponent }
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class MasterRoutingModule {

}