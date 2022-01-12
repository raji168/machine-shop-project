import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { MainRoutingModule } from "./main-rotuing.module";
import { MainComponent } from "./main.component";
import { MasterRoutingModule } from "./master/master-routing.module";
import { ProductLibraryModule } from "./productlibrary/productlibrary.module";




@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        // MasterRoutingModule,
        // ProductLibraryModule,
        MainRoutingModule,
        FormsModule,
    ],
})


export class MainModule {
}
