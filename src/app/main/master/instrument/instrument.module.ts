import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { AddInstrumentComponent } from "./add-instrument/add-instrument.component";
import { InstrumentRoutingModule } from "./instrument-routing.module";
import { InstrumentComponent } from "./instrument.component";

@NgModule({
    declarations : [
        InstrumentComponent,
        AddInstrumentComponent
    ],
    imports : [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        InstrumentRoutingModule
    ]
})
export class InstrumentModule { }