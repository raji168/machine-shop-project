
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerResolver } from "../resolvers/customer.resolver";
import { MachineResolver } from "../resolvers/machine.resolver";
import { ShiftResolver } from "../resolvers/shift.resolver";
import { InstrumentResolver } from "../resolvers/instrument.resolver";
import { RoleResolver } from "../resolvers/role.resolver";
import { UserResolver } from "../resolvers/user.resolver";
import { InstrumentComponent } from "./instrument/instrument.component";
import { MachineComponent } from "./machine/machine.component";
import { RoleComponent } from "./role/role.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    { path: '', component: RoleComponent },
    {
        path: 'role', component: RoleComponent, resolve: {
            roles: RoleResolver
        }
    },
    {
        path: 'instrument', component: InstrumentComponent, resolve: {
            instrument: InstrumentResolver
        }
    },
    {
        path: 'user', component: UserComponent, resolve: {
            user: UserResolver
        }
    },
    {
        path: 'shift', loadChildren: () => import('./shift/shift.module').then(s => s.ShiftModule),
        resolve: {
            shift: ShiftResolver
        },
    },
    {
        path: 'machine', loadChildren: () => import('./machine/machine.module').then(m => m.MachineModule),
        resolve: {
            machine: MachineResolver
        },
    },
    {
        path: 'customer', loadChildren: () => import('./customer/customer.module').then(c => c.CustomerModule),
        resolve: {
            customer: CustomerResolver
        },
    }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class MasterRoutingModule {



