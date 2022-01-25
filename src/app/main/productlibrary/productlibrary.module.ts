import { NgModule } from "@angular/core";
import { ProductLibraryComponent } from "./productlibrary.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import {  ProductComponent } from './Product/product.component';
import { ProductLibraryRoutingModule } from "./productlibrary-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddProductComponent } from './Product/add-product/add-product.component';
import { MachineMappingComponent } from "./Machine mapping/machine-mapping.component";


@NgModule({
    declarations:[
        ProductLibraryComponent,
        ProductComponent,
        AddProductComponent,
        MachineMappingComponent
    
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

