import { NgModule } from "@angular/core";
import { ProductLibraryComponent } from "./productlibrary.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import {  ProductComponent } from './Product/product.component';
import { ProductLibraryRoutingModule } from "./productlibrary-routing.module";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddProductComponent } from './Product/add-product/add-product.component';
import { MatStepperModule } from "@angular/material/stepper";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations:[
        ProductLibraryComponent,
        ProductComponent,
        FileUploadComponent,
        AddProductComponent
    
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        ProductLibraryRoutingModule,
        MaterialModule,
        FlexLayoutModule,MatStepperModule,
        MatButtonModule

    ]
})

export class ProductLibraryModule{}

