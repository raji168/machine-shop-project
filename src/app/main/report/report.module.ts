import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ReportRoutingModule } from "./report-routing.module";
import { ReportComponent } from "./report.component";

@NgModule({
    declarations:[
        ReportComponent,
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        ReportRoutingModule
    ]
})
export class ReportModule{


}