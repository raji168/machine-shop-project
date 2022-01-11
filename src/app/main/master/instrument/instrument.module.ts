<<<<<<< HEAD:src/app/master/instrument/instrument.module.ts
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
=======
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
>>>>>>> 1d72636d8662bd65054bda8b77705be574cf4447:src/app/main/master/instrument/instrument.module.ts
export class InstrumentModule { }