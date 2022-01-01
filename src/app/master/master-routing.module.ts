import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InstrumentComponent } from "./instrument/instrument.component";
import { MachineComponent } from "./machine/machine.component";
import { RoleComponent } from "./role/role.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    { path: '', component: RoleComponent },
    { path: 'machine', component: MachineComponent },
    { path: 'role', component: RoleComponent },
    { path: 'instrument', component: InstrumentComponent },
    { path: 'user', component: UserComponent },
    { path: 'shift', loadChildren: () => import('./shift/shift.module').then(s => s.ShiftModule) },
    { path: 'machine', loadChildren: () => import('./machine/machine.module').then(m => m.MachineModule) },
    { path: 'customer', loadChildren: () => import('./customer/customer.module').then(c => c.CustomerModule) }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class MasterRoutingModule {

}