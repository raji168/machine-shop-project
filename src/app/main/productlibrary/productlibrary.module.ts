import { NgModule } from "@angular/core";
import { ProductLibraryComponent } from "./productlibrary.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ProductLibraryRoutingModule } from "./productlibrary-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatStepperModule } from "@angular/material/stepper";
import { MachineMappingComponent } from "./Machine mapping/machine-mapping.component";
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddMachinemapComponent } from "./Machine mapping/add-machinemap/add-machinemap.component";
import { AddProductComponent } from "./product/add-product/add-product.component";
import { ProductComponent } from "./product/product.component";

@NgModule({
    declarations:[
        ProductLibraryComponent,
        AddProductComponent,
        MachineMappingComponent,
        AddMachinemapComponent,
        ProductComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        ProductLibraryRoutingModule,
        MaterialModule,
        FlexLayoutModule,MatStepperModule,
        FormsModule,MatTooltipModule

    ]
})

export class ProductLibraryModule{}

