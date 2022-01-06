import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { AddMachineComponent } from "./add-machine/add-machine.component";
import { MachineRoutingModule } from "./machine-routing.module";
import { MachineComponent } from "./machine.component";

@NgModule({

    declarations: [
        MachineComponent,
        AddMachineComponent
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        MachineRoutingModule

    ]

})


export class MachineModule {

}