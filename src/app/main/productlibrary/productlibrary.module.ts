import { NgModule } from "@angular/core";
import { ProductLibraryComponent } from "./productlibrary.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ProductComponent } from '../productlibrary/Product/product.component';
import { ProductLibraryRoutingModule } from "./productlibrary-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddProductComponent } from './Product/add-product/add-product.component';
import { MatStepperModule } from "@angular/material/stepper";
import {MatButtonModule} from '@angular/material/button';
import { MachineMappingComponent } from "./Machine mapping/machine-mapping.component";
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddMachinemapComponent } from "./Machine mapping/add-machinemap/add-machinemap.component";

@NgModule({
    declarations:[
        ProductLibraryComponent,
        ProductComponent,
        AddProductComponent,
        MachineMappingComponent,
        AddMachinemapComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        ProductLibraryRoutingModule,
        MaterialModule,
        FlexLayoutModule,MatStepperModule,
        MatButtonModule,FormsModule,MatTooltipModule

    ]
})

export class ProductLibraryModule{}

