import { NgModule } from "@angular/core";
import { ProductLibraryComponent } from "./productlibrary.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ProductComponent } from '../productlibrary/product/product.component';
import { ProductLibraryRoutingModule } from "./productlibrary-routing.module";
import { MappingComponent } from "./mapping/mapping.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddMappingComponent } from "./mapping/add-mapping/add-mapping.component";
import { AddProductComponent } from "./product/add-product/add-product.component";


@NgModule({
    declarations:[
        ProductLibraryComponent,
        ProductComponent,
        MappingComponent,
        AddProductComponent,
        AddMappingComponent
    
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

