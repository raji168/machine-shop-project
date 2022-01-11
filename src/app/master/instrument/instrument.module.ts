import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { AddInstrumentComponent } from "./add-instrument/add-instrument.component";
import { InstrumentRoutingModule } from "./instrument-routing.module";
import { InstrumentComponent } from "./instrument.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations : [
        InstrumentComponent,
        AddInstrumentComponent
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule,
        InstrumentRoutingModule
    ]
})
export class InstrumentModule { }