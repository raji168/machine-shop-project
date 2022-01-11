import { CommonModule } from "@angular/common";
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
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MachineRoutingModule

    ]

})


export class MachineModule {

}