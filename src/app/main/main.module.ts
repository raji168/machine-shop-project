import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { MainRoutingModule } from "./main-rotuing.module";
import { MainComponent } from "./main.component";




@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MainRoutingModule,
        FormsModule,
    ],
})


export class MainModule {
}
