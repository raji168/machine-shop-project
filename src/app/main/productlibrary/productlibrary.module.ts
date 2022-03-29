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
import { ProductComponent } from "./Product/product.component";
import { AddProductComponent } from "./Product/add-product/add-product.component";

@NgModule({
    declarations:[
        ProductLibraryComponent,
        MachineMappingComponent,
        AddMachinemapComponent,
        ProductComponent,
        AddProductComponent
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

