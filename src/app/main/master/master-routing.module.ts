import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerResolver } from "../../resolvers/customer.resolver";
import { MachineResolver } from "../../resolvers/machine.resolver";
import { ShiftResolver } from "../../resolvers/shift.resolver";
import { InstrumentResolver } from "../../resolvers/instrument.resolver";
import { RoleResolver } from "../../resolvers/role.resolver";
import { UserResolver } from "../../resolvers/user.resolver";
import { RoleComponent } from "./role/role.component";
import { InstrumentComponent } from "./instrument/instrument.component";
import { UserComponent } from "./user/user.component";
import { ShiftComponent } from "./shift/shift.component";
import { MachineComponent } from "./machine/machine.component";
import { CustomerComponent } from "./customer/customer.component";
import { MachineGroupComponent } from "./machine-group/machine-group.component";
import { MachineGropuResolver } from "src/app/resolvers/machinegroup.resolver";
import { MachineCategoryComponent } from "./machine-category/machine-category.component";
import { MachineCategoryResolver } from "src/app/resolvers/machinecategory.resolver";



@NgModule({

    imports: [RouterModule.forChild([
        {
            path: 'role', component: RoleComponent, 
            resolve: {
                roles: RoleResolver
            }
        },
        {
            path: 'instrument', component: InstrumentComponent, 
            resolve: {
                instrument: InstrumentResolver
            }
        },
        {
            path: 'user', component: UserComponent, 
            resolve: {
                user: UserResolver,
            }
        },
        {
            path: 'shift', component: ShiftComponent,
            resolve: {
                shift: ShiftResolver
            },
        },
        {
            path: 'machine', component : MachineComponent,
            resolve: {
                machine: MachineResolver
            },
        },
        {
            path: 'customer', component : CustomerComponent,
            resolve: {
                customer: CustomerResolver
            },
        },
        {
            path: 'machine-group', component : MachineGroupComponent,
            resolve: {
                machineGroup : MachineGropuResolver
            },
        },
        {
            path: 'machine-category', component : MachineCategoryComponent,
            resolve: {
                machineCategory : MachineCategoryResolver
            },
        }
    ])],
    exports: [RouterModule],
})


export class MasterRoutingModule {}



