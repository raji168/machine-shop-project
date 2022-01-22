import { NgModule } from "@angular/core";
import { ProductLibraryComponent } from "./productlibrary.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { MappingComponent } from './mapping/mapping.component';
import { ProductLibraryRoutingModule } from "./productlibrary-routing.module";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
    declarations:[
        ProductLibraryComponent,
        MappingComponent,
        FileUploadComponent
    
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        ProductLibraryRoutingModule,
        MaterialModule,
        FlexLayoutModule

    ]
})

export class ProductLibraryModule{}

