import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./Product/product.component";
import {  MachineMappingComponent } from "./Machine mapping/machine-mapping.component";


const routes: Routes = [

    {
        path: 'product', component: ProductComponent
    },
    {
        path: 'mapping', component: MachineMappingComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductLibraryRoutingModule { }