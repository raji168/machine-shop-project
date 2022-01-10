import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from "../material/material.module";
import { MasterRoutingModule } from "./master-routing.module";
import { MasterComponent } from "./master.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [

        MasterComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MasterRoutingModule,
        MatButtonModule
    ],
})


export class MasterModule {
}
