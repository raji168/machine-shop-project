import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerResolver } from "../resolvers/customer.resolver";
import { MachineResolver } from "../resolvers/machine.resolver";
import { ShiftResolver } from "../resolvers/shift.resolver";
import { InstrumentResolver } from "../resolvers/instrument.resolver";
import { RoleResolver } from "../resolvers/role.resolver";
import { UserResolver } from "../resolvers/user.resolver";

const routes: Routes = [


  

    {
        path : '' , redirectTo: 'master' , pathMatch: 'full'
    },
    {
        path: 'role', loadChildren: () => import('./role/role.module').then(r => r.RoleModule), 
        resolve: {
            roles: RoleResolver
        }
    },
    {
        path: 'instrument', loadChildren: () => import('./instrument/instrument.module').then(i => i.InstrumentModule) , 
        resolve: {
            instrument: InstrumentResolver
        }
    },
    {
        path: 'user', loadChildren: () => import('./user/user.module').then(u => u.UserModule), 
        resolve: {
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



}