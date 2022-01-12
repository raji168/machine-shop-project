import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule} from '@angular/material/button';
import { MaterialModule } from "../../material/material.module";
import { MasterRoutingModule } from "./master-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MasterComponent } from "./master.component";


@NgModule({
    declarations: [
        MasterComponent

    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MasterRoutingModule,
        FormsModule,
        MatButtonModule
    ],
})


export class MasterModule {
}
