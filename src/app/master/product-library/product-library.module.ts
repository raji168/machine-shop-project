import { NgModule } from "@angular/core";
import { ProductLibraryComponent } from "./product-library.component";
import { MaterialModule } from "../material/material.module";
import { ProductLibraryRoutingModule } from "./product-library-routing.module";
import { ProductDeatilsComponent } from "./product-deatils/product-deatils.component";

@NgModule({
    declarations :[
        ProductLibraryComponent
        
    ],
    imports:[
        ProductLibraryModule,
        MaterialModule,
        ProductLibraryRoutingModule,
        ProductDeatilsComponent

    ],

})
export class ProductLibraryModule {

}