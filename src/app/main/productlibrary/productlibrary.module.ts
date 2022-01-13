import { NgModule } from "@angular/core";
import { ProductLibraryComponent } from "./productlibrary.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { MappingComponent } from './mapping/mapping.component';
import { ProductLibraryRoutingModule } from "./productlibrary-routing.module";

@NgModule({
    declarations:[
        ProductLibraryComponent,
        MappingComponent
    
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        ProductLibraryRoutingModule
    ]
})

export class ProductLibraryModule{}

